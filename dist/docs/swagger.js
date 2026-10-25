"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerRouter = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_1 = require("express");
const app_info_1 = require("../config/app-info");
exports.swaggerRouter = (0, express_1.Router)();
const openApiSpec = {
    openapi: '3.0.3',
    info: {
        title: '🍄 ShroomSync Backend API',
        version: app_info_1.APP_INFO.version,
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
                                required: ['fullName', 'phoneNumber'],
                                properties: {
                                    fullName: { type: 'string', example: 'Pak Supriadi' },
                                    phoneNumber: { type: 'string', example: '081234567899' },
                                    email: { type: 'string', example: 'supriadi@shroomsync.id' },
                                    password: { type: 'string', example: 'PetaniAman123!' },
                                    farmName: { type: 'string', example: 'Kumbung Berkah Mandiri' },
                                    farmAddress: { type: 'string', example: 'Desa Cisarua, Lembang' },
                                    status: { type: 'string', enum: ['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'], example: 'ACTIVE' },
                                },
                            },
                        },
                    },
                },
                responses: { 201: { description: 'Akun petani berhasil dibuat' } },
            },
        },
        '/admin/farmers/{id}': {
            get: {
                tags: ['Fitur Admin'],
                summary: 'Detail data akun petani spesifik beserta perangkatnya',
                security: [{ BearerAuth: [] }],
                parameters: [
                    { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
                ],
                responses: { 200: { description: 'Detail petani ditemukan' }, 404: { description: 'Petani tidak ditemukan' } },
            },
            put: {
                tags: ['Fitur Admin'],
                summary: 'Perbarui profil atau kata sandi petani',
                security: [{ BearerAuth: [] }],
                parameters: [
                    { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
                ],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    fullName: { type: 'string', example: 'Pak Supriadi Edit' },
                                    phoneNumber: { type: 'string', example: '081234567899' },
                                    email: { type: 'string', example: 'supriadi@shroomsync.id' },
                                    password: { type: 'string', example: 'PasswordBaru123!' },
                                    farmName: { type: 'string', example: 'Kumbung Makmur Jaya' },
                                    farmAddress: { type: 'string', example: 'Jl. Kolonel Masturi No. 12' },
                                    status: { type: 'string', enum: ['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'] },
                                },
                            },
                        },
                    },
                },
                responses: { 200: { description: 'Data petani berhasil diperbarui' } },
            },
            delete: {
                tags: ['Fitur Admin'],
                summary: 'Hapus akun petani dan lepaskan seluruh kepemilikan perangkatnya',
                security: [{ BearerAuth: [] }],
                parameters: [
                    { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
                ],
                responses: { 200: { description: 'Akun petani berhasil dihapus' } },
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
        '/technician/next-serial': {
            get: {
                tags: ['Fitur Teknisi'],
                summary: 'Rekomendasi serial number terstruktur berikutnya (SS-MMYY-NNN)',
                security: [{ BearerAuth: [] }],
                responses: { 200: { description: 'Rekomendasi serial number berhasil dibuat' } },
            },
        },
        '/technician/devices/{id}': {
            get: {
                tags: ['Fitur Teknisi'],
                summary: 'Detail data hardware spesifik beserta status telemetri',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Detail hardware' }, 404: { description: 'Perangkat tidak ditemukan' } },
            },
            put: {
                tags: ['Fitur Teknisi'],
                summary: 'Perbarui informasi hardware atau versi firmware',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    name: { type: 'string' },
                                    status: { type: 'string', enum: ['READY', 'ACTIVE', 'OFFLINE', 'SUSPENDED', 'MAINTENANCE'] },
                                    hardwareVersion: { type: 'string' },
                                    firmwareVersion: { type: 'string' },
                                    ownershipType: { type: 'string', enum: ['OWNED', 'RENTED', 'LEASED'] },
                                },
                            },
                        },
                    },
                },
                responses: { 200: { description: 'Perangkat berhasil diperbarui' } },
            },
            delete: {
                tags: ['Fitur Teknisi'],
                summary: 'Hapus / dekomisi perangkat dari sistem',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Perangkat berhasil dihapus' } },
            },
        },
        '/technician/devices/{id}/identity': {
            get: {
                tags: ['Fitur Teknisi'],
                summary: 'Unduh berkas JSON identitas perangkat (device_info.json) untuk flash LittleFS ESP32',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Konten JSON identitas perangkat' } },
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
        '/technician/admins/{id}/status': {
            put: {
                tags: ['Fitur Teknisi'],
                summary: 'Ubah status aktif / nonaktif akun Administrator',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                required: ['status'],
                                properties: {
                                    status: { type: 'string', enum: ['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'], example: 'ACTIVE' },
                                },
                            },
                        },
                    },
                },
                responses: { 200: { description: 'Status admin berhasil diubah' } },
            },
        },
        '/technician/farmers': {
            get: {
                tags: ['Fitur Teknisi'],
                summary: 'Daftar seluruh petani binaan sistem (Akses Teknisi)',
                security: [{ BearerAuth: [] }],
                responses: { 200: { description: 'Daftar petani' } },
            },
            post: {
                tags: ['Fitur Teknisi'],
                summary: 'Registrasi petani baru langsung oleh Teknisi',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                required: ['fullName', 'phoneNumber'],
                                properties: {
                                    fullName: { type: 'string', example: 'Budi Santoso' },
                                    phoneNumber: { type: 'string', example: '081234567890' },
                                    email: { type: 'string', example: 'budi@gmail.com' },
                                    password: { type: 'string', example: 'PetaniAman123!' },
                                    farmName: { type: 'string', example: 'Kumbung Berkah Mandiri' },
                                    farmAddress: { type: 'string', example: 'Desa Lembang, Bandung Barat' },
                                },
                            },
                        },
                    },
                },
                responses: { 201: { description: 'Akun petani berhasil dibuat' } },
            },
        },
        '/technician/farmers/{id}': {
            get: {
                tags: ['Fitur Teknisi'],
                summary: 'Detail data akun petani (Akses Teknisi)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Detail petani' } },
            },
            put: {
                tags: ['Fitur Teknisi'],
                summary: 'Perbarui profil akun petani (Akses Teknisi)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    fullName: { type: 'string' },
                                    phoneNumber: { type: 'string' },
                                    email: { type: 'string' },
                                    password: { type: 'string' },
                                    farmName: { type: 'string' },
                                    farmAddress: { type: 'string' },
                                    status: { type: 'string', enum: ['INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE'] },
                                },
                            },
                        },
                    },
                },
                responses: { 200: { description: 'Data petani berhasil diperbarui' } },
            },
            delete: {
                tags: ['Fitur Teknisi'],
                summary: 'Hapus akun petani dan unassign unit (Akses Teknisi)',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Akun petani berhasil dihapus' } },
            },
        },
        '/technician/firmwares': {
            get: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Daftar seluruh berkas biner firmware (.bin) yang tersimpan',
                security: [{ BearerAuth: [] }],
                responses: { 200: { description: 'Daftar firmware' } },
            },
            post: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Upload berkas biner firmware baru (.bin)',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: {
                        'multipart/form-data': {
                            schema: {
                                type: 'object',
                                required: ['firmware', 'version', 'hardwareVersion'],
                                properties: {
                                    firmware: { type: 'string', format: 'binary', description: 'File firmware.bin' },
                                    version: { type: 'string', example: '1.2.0' },
                                    hardwareVersion: { type: 'string', example: '1.0' },
                                    changelog: { type: 'string', example: 'Perbaikan stabilitas reconnect MQTT & OTA' },
                                    isLatest: { type: 'boolean', example: true },
                                },
                            },
                        },
                    },
                },
                responses: { 201: { description: 'Firmware berhasil diunggah' } },
            },
        },
        '/technician/firmwares/{id}': {
            get: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Detail berkas firmware tertentu',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Detail firmware' } },
            },
            delete: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Hapus berkas biner firmware dari server',
                security: [{ BearerAuth: [] }],
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Firmware berhasil dihapus' } },
            },
        },
        '/firmwares/latest': {
            get: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Cek versi firmware terbaru (Endpoint Publik untuk ESP32/Aplikasi)',
                responses: { 200: { description: 'Informasi rilis firmware terbaru' } },
            },
        },
        '/firmwares/download/{filename}': {
            get: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Unduh file biner firmware (.bin) via HTTP (Endpoint Publik untuk ESP32 OTA)',
                parameters: [{ name: 'filename', in: 'path', required: true, schema: { type: 'string' } }],
                responses: { 200: { description: 'Binary stream firmware.bin' } },
            },
        },
        '/technician/ota/trigger': {
            post: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Trigger instruksi OTA manual ke perangkat via MQTT',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                required: ['deviceSerial'],
                                properties: {
                                    deviceSerial: { type: 'string', example: 'SS-1026-001' },
                                    firmwareId: { type: 'string' },
                                    force: { type: 'boolean', example: false },
                                },
                            },
                        },
                    },
                },
                responses: { 200: { description: 'Instruksi OTA berhasil dikirim ke perangkat' } },
            },
        },
        '/technician/ota/broadcast': {
            post: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Kirim instruksi OTA massal (Broadcast) ke seluruh perangkat aktif',
                security: [{ BearerAuth: [] }],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    firmwareId: { type: 'string' },
                                    force: { type: 'boolean', example: false },
                                },
                            },
                        },
                    },
                },
                responses: { 200: { description: 'Broadcast OTA berhasil dikirim' } },
            },
        },
        '/technician/ota/logs': {
            get: {
                tags: ['Manajemen Firmware & OTA'],
                summary: 'Daftar riwayat log eksekusi pembaruan OTA',
                security: [{ BearerAuth: [] }],
                responses: { 200: { description: 'Riwayat log OTA' } },
            },
        },
    },
};
exports.swaggerRouter.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openApiSpec, {
    customSiteTitle: 'ShroomSync API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
        persistAuthorization: true,
        docExpansion: 'list',
        filter: true,
    },
}));
exports.default = exports.swaggerRouter;
//# sourceMappingURL=swagger.js.map