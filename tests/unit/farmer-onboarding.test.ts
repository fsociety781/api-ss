import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import bcrypt from 'bcrypt';
import { prisma } from '../../bin/prismaConfig';
import { AuthController } from '../../controller/AuthController';
import { AdminController } from '../../controller/AdminController';

describe('🍄 Farmer Onboarding & Technician RBAC Tests', () => {
  const testPhone = '081299887766';
  const testEmail = 'petani.test.onboarding@shroomsync.local';
  let createdFarmerId = '';
  let technicianUserId = '';
  let dbAvailable = false;

  before(async () => {
    try {
      await prisma.$connect();
      dbAvailable = true;
    } catch (err) {
      console.warn('⚠️ [Test] PostgreSQL not reachable, skipping live DB tests in this environment:', (err as Error).message);
      return;
    }

    // Pastikan user test sebelumnya dibersihkan
    await prisma.user.deleteMany({
      where: {
        OR: [
          { phoneNumber: testPhone },
          { email: testEmail },
        ],
      },
    });

    // Ambil atau buat akun teknisi untuk pengujian
    let tech = await prisma.user.findFirst({
      where: { role: 'TECHNICIAN' },
    });
    if (!tech) {
      const hash = await bcrypt.hash('TechPassword123!', 12);
      tech = await prisma.user.create({
        data: {
          fullName: 'Teknisi Test',
          phoneNumber: '081200000001',
          email: 'tech.test@shroomsync.local',
          passwordHash: hash,
          role: 'TECHNICIAN',
          status: 'ACTIVE',
          profileCompleted: true,
        },
      });
    }
    technicianUserId = tech.id;
  });

  after(async () => {
    if (!dbAvailable) return;
    // Bersihkan user test
    if (createdFarmerId) {
      await prisma.user.deleteMany({ where: { id: createdFarmerId } });
    }
    await prisma.user.deleteMany({
      where: {
        OR: [
          { phoneNumber: testPhone },
          { email: testEmail },
        ],
      },
    });
    await prisma.$disconnect();
    setTimeout(() => {
      process.exit(0);
    }, 200);
  });

  it('1. Pembuatan akun petani baru oleh Teknisi/Admin hanya butuh kredensial dasar', async () => {
    if (!dbAvailable) return;
    let responseStatus = 200;
    let responseBody: any = null;

    const mockReq: any = {
      user: { id: technicianUserId, role: 'TECHNICIAN' },
      body: {
        fullName: 'Budi Petani Uji',
        phoneNumber: testPhone,
        email: testEmail,
        password: 'PasswordDefault123!',
      },
    };

    const mockRes: any = {
      status(code: number) {
        responseStatus = code;
        return this;
      },
      json(data: any) {
        responseBody = data;
        return this;
      },
    };

    await AdminController.createFarmer(mockReq, mockRes);

    assert.strictEqual(responseStatus, 201, 'Status pendaftaran harus 201 Created');
    assert.ok(responseBody?.data?.id, 'Harus mengembalikan id petani');
    createdFarmerId = responseBody.data.id;

    // Verifikasi flag status akun baru: belum onboarding dan wajib ubah password
    assert.strictEqual(responseBody.data.profileCompleted, false, 'profileCompleted harus false');
    assert.strictEqual(responseBody.data.mustChangePassword, true, 'mustChangePassword harus true');
    assert.strictEqual(responseBody.data.status, 'INVITED', 'status awal harus INVITED');

    // Cek di database
    const dbUser = await prisma.user.findUnique({ where: { id: createdFarmerId } });
    assert.ok(dbUser, 'Petani harus tersimpan di PostgreSQL');
    assert.strictEqual(dbUser?.profileCompleted, false);
    assert.strictEqual(dbUser?.mustChangePassword, true);
    assert.strictEqual(dbUser?.farmName, null, 'farmName awalnya harus null');
    assert.strictEqual(dbUser?.farmAddress, null, 'farmAddress awalnya harus null');
  });

  it('2. Login pertama petani baru harus diarahkan ke form onboarding (nextStep: complete_profile)', async () => {
    if (!dbAvailable) return;
    let responseStatus = 200;
    let responseBody: any = null;

    const mockReq: any = {
      body: {
        identifier: testPhone,
        password: 'PasswordDefault123!',
      },
    };

    const mockRes: any = {
      status(code: number) {
        responseStatus = code;
        return this;
      },
      json(data: any) {
        responseBody = data;
        return this;
      },
    };

    await AuthController.login(mockReq, mockRes);

    assert.strictEqual(responseStatus, 200);
    assert.strictEqual(responseBody?.data?.mustSetupProfile, true, 'mustSetupProfile harus bernilai true');
    assert.strictEqual(responseBody?.data?.nextStep, 'complete_profile', 'nextStep harus complete_profile');
    assert.ok(responseBody?.data?.token, 'Harus menyertakan JWT token');
  });

  it('3. Form onboarding menolak jika password lama tidak cocok', async () => {
    if (!dbAvailable) return;
    const mockReq: any = {
      user: { id: createdFarmerId, role: 'FARMER' },
      body: {
        currentPassword: 'PasswordSalahTotal!',
        newPassword: 'PasswordRahasiaBaru2026!',
        fullName: 'Budi Santoso Petani',
        farmName: 'Kumbung Berkah Jaya',
        farmAddress: 'Lembang, Bandung Barat',
      },
    };

    const mockRes: any = {
      status: () => mockRes,
      json: () => mockRes,
    };

    await assert.rejects(
      async () => {
        await AuthController.completeOnboarding(mockReq, mockRes);
      },
      /Password lama\/default tidak cocok/i,
      'Harus melempar error password lama tidak cocok',
    );
  });

  it('4. Petani melengkapi data diri, nama usaha, alamat kumbung, dan ganti password baru', async () => {
    if (!dbAvailable) return;
    let responseStatus = 200;
    let responseBody: any = null;

    const mockReq: any = {
      user: { id: createdFarmerId, role: 'FARMER' },
      body: {
        currentPassword: 'PasswordDefault123!',
        newPassword: 'PasswordRahasiaBaru2026!',
        fullName: 'Budi Santoso Mandiri',
        phoneNumber: testPhone,
        email: testEmail,
        farmName: 'Kumbung Berkah Tiram Makmur',
        farmAddress: 'Jl. Raya Lembang No. 128, Kab. Bandung Barat',
      },
    };

    const mockRes: any = {
      status(code: number) {
        responseStatus = code;
        return this;
      },
      json(data: any) {
        responseBody = data;
        return this;
      },
    };

    await AuthController.completeOnboarding(mockReq, mockRes);

    assert.strictEqual(responseStatus, 200);
    assert.strictEqual(responseBody?.data?.nextStep, 'dashboard', 'nextStep setelah onboarding harus dashboard');
    assert.strictEqual(responseBody?.data?.user?.profileCompleted, true, 'profileCompleted harus true');
    assert.strictEqual(responseBody?.data?.user?.mustChangePassword, false, 'mustChangePassword harus false');

    // Verifikasi data di database
    const dbUser = await prisma.user.findUnique({ where: { id: createdFarmerId } });
    assert.strictEqual(dbUser?.fullName, 'Budi Santoso Mandiri');
    assert.strictEqual(dbUser?.farmName, 'Kumbung Berkah Tiram Makmur', 'farmName harus tersimpan di PostgreSQL');
    assert.strictEqual(dbUser?.farmAddress, 'Jl. Raya Lembang No. 128, Kab. Bandung Barat', 'farmAddress harus tersimpan di PostgreSQL');
    assert.strictEqual(dbUser?.profileCompleted, true);
    assert.strictEqual(dbUser?.mustChangePassword, false);
    assert.strictEqual(dbUser?.status, 'ACTIVE');

    // Verifikasi password baru terhash dengan benar
    const isNewPassValid = await bcrypt.compare('PasswordRahasiaBaru2026!', dbUser?.passwordHash || '');
    assert.strictEqual(isNewPassValid, true, 'Password baru harus bisa digunakan');
    const isOldPassValid = await bcrypt.compare('PasswordDefault123!', dbUser?.passwordHash || '');
    assert.strictEqual(isOldPassValid, false, 'Password default lama sudah tidak boleh valid');
  });

  it('5. Login berikutnya langsung masuk ke dashboard utama (nextStep: dashboard)', async () => {
    if (!dbAvailable) return;
    let responseStatus = 200;
    let responseBody: any = null;

    const mockReq: any = {
      body: {
        identifier: testPhone,
        password: 'PasswordRahasiaBaru2026!',
      },
    };

    const mockRes: any = {
      status(code: number) {
        responseStatus = code;
        return this;
      },
      json(data: any) {
        responseBody = data;
        return this;
      },
    };

    await AuthController.login(mockReq, mockRes);

    assert.strictEqual(responseStatus, 200);
    assert.strictEqual(responseBody?.data?.mustSetupProfile, false, 'mustSetupProfile harus false');
    assert.strictEqual(responseBody?.data?.nextStep, 'dashboard', 'nextStep harus dashboard');
    assert.strictEqual(responseBody?.data?.user?.farmName, 'Kumbung Berkah Tiram Makmur');
    assert.strictEqual(responseBody?.data?.user?.farmAddress, 'Jl. Raya Lembang No. 128, Kab. Bandung Barat');
  });

  it('6. Admin & Teknisi dapat melihat nama usaha dan alamat kumbung petani pada daftar petani', async () => {
    if (!dbAvailable) return;
    let responseBody: any = null;

    const mockReq: any = {
      user: { id: technicianUserId, role: 'TECHNICIAN' },
    };

    const mockRes: any = {
      status: () => mockRes,
      json(data: any) {
        responseBody = data;
        return this;
      },
    };

    await AdminController.listFarmers(mockReq, mockRes);

    const farmerList = responseBody?.data;
    assert.ok(Array.isArray(farmerList), 'Harus mengembalikan array petani');
    const target = farmerList.find((f: any) => f.id === createdFarmerId);
    assert.ok(target, 'Petani harus ada di daftar petani');
    assert.strictEqual(target.farmName, 'Kumbung Berkah Tiram Makmur');
    assert.strictEqual(target.farmAddress, 'Jl. Raya Lembang No. 128, Kab. Bandung Barat');
    assert.strictEqual(target.profileCompleted, true);
  });
});
