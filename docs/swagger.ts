import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';
import { APP_INFO } from '../config/app-info';

export const swaggerRouter = Router();

const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: '🍄 ShroomSync Backend API',
    version: APP_INFO.version,
    description: `
**Dokumentasi Resmi ShroomSync Enterprise IoT API Service**

Backend manajemen kumbung jamur pintar (*Smart Cultivation Mushroom*) yang terhubung dengan mikrokontroler ESP32 via MQTT dan REST API.
Mendukung multi-role (*FARMER, TECHNICIAN, ADMIN*), kontrol aktuator terotomatisasi, telemetri sensor suhu-kelembaban, serta pelacakan siklus budidaya & hasil panen.
    `,
    contact: {
      name: 'ShroomSync Engineering Team',
      email: 'dev@shroomsync.id',
    },
    license: {
      name: 'Proprietary',
    },
  },
  servers: [
    {
      url: '/api/v1',
      description: 'API v1 Current Server',
    },
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Local Development Server',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Masukkan JWT token: Bearer <token>',
      },
    },
    schemas: {
      ApiResponseSuccess: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'success' },
          message: { type: 'string', example: 'Operasi berhasil dieksekusi' },
          data: { type: 'object' },
        },
      },
      ApiResponseError: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'error' },
          message: { type: 'string', example: 'Pesan kegagalan' },
          code: { type: 'string', example: 'ERROR_CODE' },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['identifier', 'password'],
        properties: {
          identifier: {
            type: 'string',
            example: '08123456789',
            description: 'Nomor telepon atau alamat email',
          },
          password: {
            type: 'string',
            example: 'Password123!',
            description: 'Password pengguna',
          },
        },
      },
      CompleteOnboardingRequest: {
        type: 'object',
        required: ['newPassword'],
        properties: {
          newPassword: { type: 'string', example: 'RahasiaBaru123!' },
          name: { type: 'string', example: 'Budi Santoso' },
          address: { type: 'string', example: 'Kec. Cisarua, Bogor' },
          farmName: { type: 'string', example: 'Kumbung Makmur Sejahtera' },
          mushroomType: { type: 'string', example: 'Jamur Tiram Putih' },
        },
      },
      ActivateDeviceRequest: {
        type: 'object',
        required: ['deviceId'],
        properties: {
          deviceId: { type: 'string', example: 'SS-0426-001' },
          name: { type: 'string', example: 'Kumbung Barat - Tiram Putih' },
        },
      },
      ControlModeRequest: {
        type: 'object',
        required: ['controlMode'],
        properties: {
          controlMode: {
            type: 'integer',
            enum: [1, 2, 3],
            description: '1 = Manual, 2 = Otomatis, 3 = Jadwal',
            example: 2,
          },
        },
      },
      SetpointRequest: {
        type: 'object',
        properties: {
          minSuhu: { type: 'number', example: 22 },
          midSuhu: { type: 'number', example: 28 },
          minKelembaban: { type: 'number', example: 80 },
          midKelembaban: { type: 'number', example: 92 },
        },
      },
      TimerRequest: {
        type: 'object',
        properties: {
          timerMinute: { type: 'integer', example: 2 },
          timerSecond: { type: 'integer', example: 30 },
        },
      },
      FloorTimerRequest: {
        type: 'object',
        properties: {
          floorTimerMinute: { type: 'integer', example: 1 },
          floorTimerSecond: { type: 'integer', example: 0 },
        },
      },
      ActuatorRequest: {
        type: 'object',
        required: ['state'],
        properties: {
          state: { type: 'string', enum: ['ON', 'OFF'], example: 'ON' },
        },
      },
      CreateCycleRequest: {
        type: 'object',
        required: ['name', 'mushroomType'],
        properties: {
          name: { type: 'string', example: 'Siklus Mei 2026 - Kumbung A' },
          mushroomType: { type: 'string', example: 'Jamur Tiram' },
          strain: { type: 'string', example: 'Tiram Putih' },
          baglogCount: { type: 'integer', example: 1200 },
          startedAt: { type: 'string', format: 'date-time', example: '2026-05-21T00:00:00.000Z' },
          expectedEndedAt: { type: 'string', format: 'date-time', example: '2026-09-21T00:00:00.000Z' },
          notes: { type: 'string', example: 'Bibit unggul F2' },
        },
      },
      CreateHarvestRequest: {
        type: 'object',
        required: ['weightKg'],
        properties: {
          harvestedAt: { type: 'string', format: 'date-time', example: '2026-06-10T08:30:00.000Z' },
          weightKg: { type: 'number', example: 18.75 },
          pricePerKg: { type: 'number', example: 18000 },
          grade: { type: 'string', example: 'A' },
          notes: { type: 'string', example: 'Panen pagi segar' },
        },
      },
    },
  },
  tags: [
    { name: 'Autentikasi', description: 'Login, Profil, & Onboarding Akun Petani' },
    { name: 'Devices', description: 'Aktivasi, Tautan, dan Manajemen Kumbung IoT' },
    { name: 'Kontrol & Otomasi', description: 'Setpoint Suhu, Kelembaban, Timer, Jadwal, & Override Aktuator' },
    { name: 'Telemetri', description: 'Pembacaan Sensor dan Log Riwayat ESP32' },
    { name: 'Siklus & Panen', description: 'Siklus Budidaya, Catatan Panen, & Analisis Produktivitas' },
    { name: 'Farmer Dashboard', description: 'Preset Varietas Cerdas & Ringkasan Petani' },
    { name: 'Fitur Admin', description: 'Manajemen Petani & Penugasan Kumbung' },
    { name: 'Fitur Teknisi', description: 'Provisioning Hardware ESP32 & Manajemen Admin' },
    { name: 'Sistem & Health', description: 'Status Kesehatan Layanan, Database & MQTT' },
  ],
  paths: {
    '/health': {
      get: {
        tags: ['Sistem & Health'],
        summary: 'Pemeriksaan Kesehatan Sistem (Deep Probing)',
        description: 'Memeriksa koneksi database PostgreSQL, broker MQTT, memori, dan uptime.',
        responses: {
          200: { description: 'Sistem operasional dan sehat' },
          503: { description: 'Layanan terganggu (Degraded/Down)' },
        },
      },
    },
    '/auth/login': {
      post: {
        tags: ['Autentikasi'],
        summary: 'Login Akun (Petani, Teknisi, Admin)',
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } } },
        },
        responses: {
          200: { description: 'Login berhasil, mengembalikan JWT token' },
          401: { description: 'Kredensial tidak valid' },
        },
      },
    },
    '/auth/me': {
      get: {
        tags: ['Autentikasi'],
        summary: 'Mendapatkan profil pengguna yang sedang login',
        security: [{ BearerAuth: [] }],
        responses: {
          200: { description: 'Data profil berhasil diambil' },
        },
      },
    },
    '/auth/complete-onboarding': {
      post: {
        tags: ['Autentikasi'],
        summary: 'Selesaikan onboarding petani dan perbarui profil',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/CompleteOnboardingRequest' } } },
        },
        responses: {
          200: { description: 'Onboarding berhasil' },
        },
      },
    },
    '/devices': {
      get: {
        tags: ['Devices'],
        summary: 'Daftar semua kumbung/device milik pengguna',
        security: [{ BearerAuth: [] }],
        responses: {
          200: { description: 'Daftar perangkat berhasil diambil' },
        },
      },
      post: {
        tags: ['Devices'],
        summary: 'Registrasi perangkat baru (Teknisi/Admin)',
        security: [{ BearerAuth: [] }],
        responses: { 201: { description: 'Perangkat berhasil dibuat' } },
      },
    },
    '/devices/activate': {
      post: {
        tags: ['Devices'],
        summary: 'Aktivasi / Tautkan Perangkat Kumbung ke Petani',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/ActivateDeviceRequest' } } },
        },
        responses: {
          200: { description: 'Perangkat berhasil ditautkan ke akun petani' },
          409: { description: 'Perangkat sudah diklaim oleh petani lain' },
        },
      },
    },
    '/devices/unpair/{deviceId}': {
      post: {
        tags: ['Devices'],
        summary: 'Lepaskan tautan perangkat kumbung',
        security: [{ BearerAuth: [] }],
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        responses: {
          200: { description: 'Perangkat berhasil dilepaskan dari akun' },
        },
      },
    },
    '/devices/{deviceId}': {
      get: {
        tags: ['Devices'],
        summary: 'Detail status dan konfigurasi perangkat kumbung',
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        responses: {
          200: { description: 'Detail perangkat ditemukan' },
          404: { description: 'Perangkat tidak ditemukan' },
        },
      },
    },
    '/devices/{deviceId}/control/mode': {
      post: {
        tags: ['Kontrol & Otomasi'],
        summary: 'Ubah Mode Kontrol (Manual/Otomatis/Jadwal)',
        security: [{ BearerAuth: [] }],
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/ControlModeRequest' } } },
        },
        responses: { 200: { description: 'Mode kontrol berhasil diperbarui & di-publish ke MQTT' } },
      },
    },
    '/devices/{deviceId}/setpoint': {
      post: {
        tags: ['Kontrol & Otomasi'],
        summary: 'Perbarui Setpoint Suhu & Kelembaban Otomatis',
        security: [{ BearerAuth: [] }],
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/SetpointRequest' } } },
        },
        responses: { 200: { description: 'Setpoint berhasil diperbarui' } },
      },
    },
    '/devices/{deviceId}/timer': {
      post: {
        tags: ['Kontrol & Otomasi'],
        summary: 'Atur durasi penyemprotan pompa kabut atas',
        security: [{ BearerAuth: [] }],
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/TimerRequest' } } },
        },
        responses: { 200: { description: 'Timer berhasil diperbarui' } },
      },
    },
    '/devices/{deviceId}/timer/floor': {
      post: {
        tags: ['Kontrol & Otomasi'],
        summary: 'Atur durasi penyemprotan pompa lantai',
        security: [{ BearerAuth: [] }],
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/FloorTimerRequest' } } },
        },
        responses: { 200: { description: 'Timer lantai berhasil diperbarui' } },
      },
    },
    '/devices/{deviceId}/actuator/pump': {
      post: {
        tags: ['Kontrol & Otomasi'],
        summary: 'Manual Override Saklar Pompa',
        security: [{ BearerAuth: [] }],
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/ActuatorRequest' } } },
        },
        responses: { 200: { description: 'Status pompa diubah & disinkronkan' } },
      },
    },
    '/devices/{deviceId}/actuator/fan': {
      post: {
        tags: ['Kontrol & Otomasi'],
        summary: 'Manual Override Saklar Kipas Sirkulasi',
        security: [{ BearerAuth: [] }],
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/ActuatorRequest' } } },
        },
        responses: { 200: { description: 'Status kipas diubah & disinkronkan' } },
      },
    },
    '/devices/{deviceId}/telemetry/sensor/latest': {
      get: {
        tags: ['Telemetri'],
        summary: 'Ambil pembacaan sensor real-time paling mutakhir',
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Data sensor real-time' } },
      },
    },
    '/devices/{deviceId}/telemetry/sensor': {
      get: {
        tags: ['Telemetri'],
        summary: 'Query riwayat sensor berdasarkan rentang waktu',
        parameters: [
          { name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } },
          { name: 'from', in: 'query', schema: { type: 'string', format: 'date-time' } },
          { name: 'to', in: 'query', schema: { type: 'string', format: 'date-time' } },
          { name: 'limit', in: 'query', schema: { type: 'integer', default: 50 } },
        ],
        responses: { 200: { description: 'Daftar riwayat data sensor' } },
      },
    },
    '/devices/{deviceId}/cycles': {
      get: {
        tags: ['Siklus & Panen'],
        summary: 'Daftar siklus budidaya pada perangkat kumbung',
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Daftar siklus budidaya' } },
      },
      post: {
        tags: ['Siklus & Panen'],
        summary: 'Mulai siklus budidaya baru',
        parameters: [{ name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/CreateCycleRequest' } } },
        },
        responses: { 201: { description: 'Siklus budidaya berhasil dimulai' } },
      },
    },
    '/devices/{deviceId}/cycles/{cycleId}/summary': {
      get: {
        tags: ['Siklus & Panen'],
        summary: 'Ringkasan & Analisis Performa Hasil Panen Siklus',
        parameters: [
          { name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } },
          { name: 'cycleId', in: 'path', required: true, schema: { type: 'string' } },
        ],
        responses: {
          200: {
            description: 'Resume statistik panen (total panen, bobot, omset, yield per baglog, peak harvest)',
          },
        },
      },
    },
    '/devices/{deviceId}/cycles/{cycleId}/harvests': {
      get: {
        tags: ['Siklus & Panen'],
        summary: 'Daftar catatan panen dalam suatu siklus',
        parameters: [
          { name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } },
          { name: 'cycleId', in: 'path', required: true, schema: { type: 'string' } },
        ],
        responses: { 200: { description: 'Riwayat panen' } },
      },
      post: {
        tags: ['Siklus & Panen'],
        summary: 'Catat hasil panen baru',
        parameters: [
          { name: 'deviceId', in: 'path', required: true, schema: { type: 'string' } },
          { name: 'cycleId', in: 'path', required: true, schema: { type: 'string' } },
        ],
        requestBody: {
          required: true,
          content: { 'application/json': { schema: { $ref: '#/components/schemas/CreateHarvestRequest' } } },
        },
        responses: { 201: { description: 'Catatan panen tersimpan' } },
      },
    },
    '/farmer/presets': {
      get: {
        tags: ['Farmer Dashboard'],
        summary: 'Daftar rekomendasi parameter varietas jamur',
        security: [{ BearerAuth: [] }],
        responses: { 200: { description: 'Daftar preset jamur' } },
      },
    },
    '/farmer/dashboard': {
      get: {
        tags: ['Farmer Dashboard'],
        summary: 'Dashboard terpadu operasional petani',
        security: [{ BearerAuth: [] }],
        responses: { 200: { description: 'Ringkasan perangkat, telemetri, dan siklus aktif petani' } },
      },
    },
    '/admin/dashboard': {
      get: {
        tags: ['Fitur Admin'],
        summary: 'Dashboard statistik ekosistem petani & perangkat',
        security: [{ BearerAuth: [] }],
        responses: { 200: { description: 'Statistik ekosistem petani berhasil diambil' } },
      },
    },
    '/admin/farmers': {
      get: {
        tags: ['Fitur Admin'],
        summary: 'Daftar semua akun petani binaan',
        security: [{ BearerAuth: [] }],
        responses: { 200: { description: 'Daftar petani' } },
      },
      post: {
        tags: ['Fitur Admin'],
        summary: 'Pendaftaran / Registrasi akun petani baru',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['fullName', 'phoneNumber', 'password'],
                properties: {
                  fullName: { type: 'string', example: 'Pak Supriadi' },
                  phoneNumber: { type: 'string', example: '081234567899' },
                  email: { type: 'string', example: 'supriadi@shroomsync.id' },
                  password: { type: 'string', example: 'PetaniAman123!' },
                },
              },
            },
          },
        },
        responses: { 201: { description: 'Akun petani berhasil dibuat' } },
      },
    },
    '/admin/devices/assign': {
      post: {
        tags: ['Fitur Admin'],
        summary: 'Tugaskan / pasangkan perangkat ke akun petani',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['deviceId', 'farmerId'],
                properties: {
                  deviceId: { type: 'string', example: 'uuid-device-atau-serial' },
                  farmerId: { type: 'string', example: 'uuid-farmer' },
                },
              },
            },
          },
        },
        responses: { 200: { description: 'Perangkat berhasil ditautkan ke petani' } },
      },
    },
    '/technician/dashboard': {
      get: {
        tags: ['Fitur Teknisi'],
        summary: 'Dashboard diagnostik hardware & infrastruktur IoT',
        security: [{ BearerAuth: [] }],
        responses: { 200: { description: 'Diagnostik teknisi' } },
      },
    },
    '/technician/devices': {
      get: {
        tags: ['Fitur Teknisi'],
        summary: 'Inventaris seluruh perangkat keras mikrokontroler ESP32',
        security: [{ BearerAuth: [] }],
        responses: { 200: { description: 'Daftar seluruh perangkat sistem' } },
      },
      post: {
        tags: ['Fitur Teknisi'],
        summary: 'Provisioning perangkat keras baru & generate serial/activation code',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['serialNumber', 'model'],
                properties: {
                  serialNumber: { type: 'string', example: 'SS-0526-002' },
                  name: { type: 'string', example: 'Kumbung Timur - Shiitake' },
                  model: { type: 'string', example: 'ShroomSync Smart Node v2' },
                  hardwareVersion: { type: 'string', example: '2.0' },
                  firmwareVersion: { type: 'string', example: '2.1.0' },
                },
              },
            },
          },
        },
        responses: { 201: { description: 'Hardware baru berhasil didaftarkan' } },
      },
    },
    '/technician/admins': {
      get: {
        tags: ['Fitur Teknisi'],
        summary: 'Daftar akun Administrator sistem',
        security: [{ BearerAuth: [] }],
        responses: { 200: { description: 'Daftar admin' } },
      },
      post: {
        tags: ['Fitur Teknisi'],
        summary: 'Buat akun Administrator baru',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['fullName', 'phoneNumber', 'password'],
                properties: {
                  fullName: { type: 'string', example: 'Admin Regional Jabar' },
                  phoneNumber: { type: 'string', example: '081299998888' },
                  email: { type: 'string', example: 'admin.jabar@shroomsync.id' },
                  password: { type: 'string', example: 'AdminKuat123!' },
                },
              },
            },
          },
        },
        responses: { 201: { description: 'Akun admin berhasil dibuat' } },
      },
    },
  },
};

swaggerRouter.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(openApiSpec, {
    customSiteTitle: 'ShroomSync API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'list',
      filter: true,
    },
  }),
);

export default swaggerRouter;

