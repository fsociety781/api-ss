# 🍄 ShroomSync Backend API Documentation (v2.0.0)

Dokumentasi resmi ShroomSync API Backend yang telah diselaraskan 100% dengan kontrak frontend dan referensi [fsociety781/api-shroomsync](https://github.com/fsociety781/api-shroomsync).

Stack: **Node.js + Express 5 + TypeScript + Prisma 7 (PostgreSQL Adapter) + MQTT Client (HiveMQ / Custom Broker)**.

---

## 🌐 Base URL & Port
- Local Dev: `http://localhost:3000` (atau port di `.env`)
- API Prefix: `/api/v1`
- Health Checks: `GET /api/health` & `GET /api/v1/health`

---

## 🔑 Autentikasi & Onboarding Petani

### 1. Login Petani / Admin / Teknisi
- **Method & Route:** `POST /api/v1/auth/login`
- **Body:**
  ```json
  {
    "identifier": "08123456789", // atau email "petani@shroomsync.id"
    "password": "password123"
  }
  ```
- **Response (200):**
  ```json
  {
    "status": "success",
    "message": "Login berhasil",
    "data": {
      "token": "eyJhbGciOi...",
      "user": {
        "id": "uuid-petani",
        "name": "Budi Santoso",
        "email": "petani@shroomsync.id",
        "phone": "08123456789",
        "role": "FARMER",
        "onboardingStep": 3,
        "isProfileComplete": true
      }
    }
  }
  ```

### 2. Complete Onboarding
- **Method & Route:** `POST /api/v1/auth/complete-onboarding`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "newPassword": "PasswordBaru123!",
    "name": "Budi Santoso",
    "address": "Kec. Cisarua, Kab. Bogor",
    "farmName": "Kumbung Berkah Mandiri",
    "mushroomType": "Jamur Tiram Putih"
  }
  ```

### 3. Profil Pengguna (Get Me)
- **Method & Route:** `GET /api/v1/auth/me`
- **Headers:** `Authorization: Bearer <token>`

---

## 📱 Device Management (Kumbung IoT)

### 1. List Devices
- **Method & Route:** `GET /api/v1/devices`
- **Headers:** `Authorization: Bearer <token>` (Opsional / Otomatis filter berdasarkan farmer login)
- **Response (200):**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "uuid-device",
        "deviceId": "SS-1026-001",
        "name": "Kumbung Barat - Tiram Putih",
        "hardwareVersion": "1.0",
        "firmwareVersion": "1.1.0",
        "macAddress": "DB:4E:B5:80:12:34", // Otomatis tersinkronisasi saat hardware terhubung
        "isOnline": true,
        "rssiDbm": -65,
        "signalStrength": "Good",
        "uptimeMs": 3600000,
        "sensorValid": true,
        "pumpStatus": "OFF",
        "floorPumpStatus": "OFF",
        "fanStatus": "OFF",
        "activatedAt": "2026-09-15T14:45:00.000Z",
        "lastSeenAt": "2026-10-02T10:00:00.000Z"
      }
    ],
    "pagination": {
      "total": 1,
      "limit": 50,
      "offset": 0,
      "hasMore": false
    }
  }
  ```

### 2. Aktivasi / Hubungkan Kumbung Baru (Scan QR / Input ID)
- **Method & Route:** `POST /api/v1/devices/activate`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "deviceId": "SS-0426-001",
    "name": "Kumbung Barat - Tiram Putih"
  }
  ```

### 3. Lepaskan Tautan Device (Unpair)
- **Method & Route:** `POST /api/v1/devices/unpair/:deviceId` (atau `POST /api/v1/devices/:deviceId/unpair`)
- **Headers:** `Authorization: Bearer <token>`

### 4. Detail Device & Konfigurasi Aktif
- **Method & Route:** `GET /api/v1/devices/:deviceId`
- **Response:** Mengembalikan status online, konfigurasi setpoint, timer, dan jadwal terkini.

---

## ⚙️ Kontrol Perangkat & Sinkronisasi MQTT

Setiap pembaruan konfigurasi di bawah otomatis tersimpan di database dan mem-publish payload JSON ke broker MQTT (topik `shroomsync/{deviceId}/command/*` atau `shroomsync/{deviceId}/config/*`).

### 1. Ubah Mode Kontrol (`1 = Manual`, `2 = Otomatis`, `3 = Jadwal`)
- **Method & Route:** `POST /api/v1/devices/:deviceId/control/mode`
- **Body:** `{"controlMode": 2}`

### 2. Atur Ambang Suhu & Kelembaban (Setpoint)
- **Method & Route:** `POST /api/v1/devices/:deviceId/setpoint`
- **Body:**
  ```json
  {
    "minSuhu": 22,
    "midSuhu": 28,
    "minKelembaban": 80,
    "midKelembaban": 92
  }
  ```

### 3. Durasi Timer Pompa Utama & Sirkulasi Lantai
- **Pompa Atas:** `POST /api/v1/devices/:deviceId/timer`
  `{"timerMinute": 2, "timerSecond": 30}`
- **Pompa Lantai:** `POST /api/v1/devices/:deviceId/timer/floor` (alias `.../floor-timer`)
  `{"floorTimerMinute": 1, "floorTimerSecond": 0}`

### 4. Jadwal Penyiraman Terjadwal
- **Jadwal Jam Atas:** `POST /api/v1/devices/:deviceId/schedule`
  `{"schedule1Hour": 7, "schedule1Minute": 0, "schedule2Hour": 12, "schedule2Minute": 30, "schedule3Hour": 17, "schedule3Minute": 0}`
- **Jadwal Jam Lantai:** `POST /api/v1/devices/:deviceId/schedule/floor` (alias `.../floor-schedule`)
  `{"floorScheduleHour": 8, "floorScheduleMinute": 0}`
- **Aktifkan/Nonaktifkan Mode Jadwal:** `POST /api/v1/devices/:deviceId/schedule/mode` (alias `.../schedule-mode`)
  `{"scheduleMode": 1}`

### 5. Tombol Manual Aktuator (Override Pompa & Kipas)
- **Manual Pompa:** `POST /api/v1/devices/:deviceId/actuator/pump` (alias `.../control/pump`)
  `{"state": "ON"}` atau `{"state": "OFF"}`
- **Manual Kipas:** `POST /api/v1/devices/:deviceId/actuator/fan` (alias `.../control/fan`)
  `{"state": "ON"}` atau `{"state": "OFF"}`

---

## 📈 Data Telemetri & Histori Sensor

### 1. Query Sensor (Rentang Tanggal & Aggregasi)
- **Method & Route:** `GET /api/v1/devices/:deviceId/telemetry/sensor?from=2026-09-01&to=2026-10-01&limit=100`
- **Format Data:** `timestamp`, `suhu`, `kelembaban`, `suhuLuar`, `kelembabanLuar`.

### 2. Telemetri Sensor Terkini
- **Method & Route:** `GET /api/v1/devices/:deviceId/telemetry/sensor/latest`

### 3. Histori Log Status Perangkat
- **Rentang Log:** `GET /api/v1/devices/:deviceId/telemetry/history`
- **Log Terkini:** `GET /api/v1/devices/:deviceId/telemetry/history/latest`
- **Data:** `pumpStatus`, `floorPumpStatus`, `fanStatus`, `controlMode`, `rssiDbm`, dll.

---

## 🌱 Siklus Budidaya (Cultivation Cycles) & Catatan Panen (Harvests)

### 1. Buat Siklus Baru
- **Method & Route:** `POST /api/v1/devices/:deviceId/cycles`
- **Body:**
  ```json
  {
    "name": "Siklus Oktober 2026",
    "mushroomType": "Jamur Tiram",
    "strain": "Tiram Putih Florida",
    "baglogCount": 1500,
    "startedAt": "2026-10-01",
    "expectedEndedAt": "2027-02-01",
    "notes": "Bibit F3 kualitas unggul"
  }
  ```

### 2. Daftar Siklus Perangkat
- **Method & Route:** `GET /api/v1/devices/:deviceId/cycles?status=active`

### 3. Detail & Update Siklus
- **Detail:** `GET /api/v1/devices/:deviceId/cycles/:cycleId`
- **Update:** `PATCH` / `PUT /api/v1/devices/:deviceId/cycles/:cycleId`
- **Tandai Selesai:** `POST /api/v1/devices/:deviceId/cycles/:cycleId/complete`
- **Hapus Siklus:** `DELETE /api/v1/devices/:deviceId/cycles/:cycleId`

### 4. Ringkasan & Analisis Performa Siklus (Summary)
- **Method & Route:** `GET /api/v1/devices/:deviceId/cycles/:cycleId/summary`
- **Response:**
  ```json
  {
    "status": "success",
    "data": {
      "cycle": {
        "id": "uuid-siklus",
        "deviceId": "SS-0426-001",
        "name": "Siklus Oktober 2026",
        "mushroomType": "Jamur Tiram",
        "baglogCount": 1500,
        "startedAt": "2026-10-01T00:00:00.000Z",
        "status": "active",
        "_count": { "harvests": 4 }
      },
      "summary": {
        "totalHarvests": 4,
        "totalWeightKg": 82.5,
        "totalRevenue": 1485000,
        "cycleAgeDays": 25,
        "harvestDays": 4,
        "averageWeightPerHarvestKg": 20.625,
        "averageWeightPerCycleDayKg": 3.3,
        "averageWeightPerHarvestDayKg": 20.625,
        "yieldPerBaglogKg": 0.055,
        "firstHarvestAt": "2026-10-10T08:00:00.000Z",
        "latestHarvestAt": "2026-10-22T08:30:00.000Z",
        "peakHarvestDay": {
          "date": "2026-10-22",
          "weightKg": 25.4
        }
      }
    }
  }
  ```

### 5. Pencatatan Panen (Harvest Records)
- **List Catatan Panen:** `GET /api/v1/devices/:deviceId/cycles/:cycleId/harvests`
- **Tambah Catatan Panen:** `POST /api/v1/devices/:deviceId/cycles/:cycleId/harvests`
  ```json
  {
    "harvestedAt": "2026-10-22T08:30:00.000Z",
    "weightKg": 25.4,
    "pricePerKg": 18000,
    "grade": "A",
    "notes": "Panen pagi mekar sempurna"
  }
  ```
- **Edit Panen:** `PATCH` / `PUT /api/v1/devices/:deviceId/cycles/:cycleId/harvests/:harvestId`
- **Hapus Panen:** `DELETE /api/v1/devices/:deviceId/cycles/:cycleId/harvests/:harvestId`

---

## 🍄 Fitur Khusus Petani (Farmer Routes)

Tersedia di `/api/v1/farmer/*`:
- `GET /api/v1/farmer/dashboard`: Ringkasan instan seluruh kumbung yang dimiliki petani, status konektivitas, telemetri real-time terbaru, dan panen terkini.
- `GET /api/v1/farmer/presets`: Daftar standar suhu & kelembaban rekomendasi budidaya untuk Jamur Tiram Putih, Cokelat, Kuping, Shiitake, Merang, dan Kancing.
- `POST /api/v1/farmer/devices/:deviceId/apply-preset`: Langsung menerapkan parameter preset ke alat ESP32 sekaligus update database dan broadcast via MQTT.
- `GET /api/v1/farmer/analytics/cycles`: Agregat statistik produksi seluruh siklus aktif dan riwayat pendapatan.
- `POST /api/v1/farmer/devices/:deviceId/emergency-stop`: Mematikan seluruh aktuator seketika dalam situasi darurat.

---

## 👑 Fitur Administrator (Admin Routes)

Semua rute admin berada di bawah prefix `/api/v1/admin/*` dan membutuhkan header `Authorization: Bearer <token>` dengan akun ber-role `ADMIN` (atau `TECHNICIAN`).

### 1. Dashboard Ringkasan Admin
- **Method & Route:** `GET /api/v1/admin/dashboard`
- **Response (200):** Statistik jumlah total petani, total perangkat aktif/offline, dan aktivitas terkini.

### 2. Manajemen Petani (Farmer Management)
- **Daftar Petani Binaan:** `GET /api/v1/admin/farmers?limit=20&page=1`
- **Detail Petani:** `GET /api/v1/admin/farmers/:id`
- **Pendaftaran Petani Baru:** `POST /api/v1/admin/farmers`
  ```json
  {
    "fullName": "Supriadi",
    "phoneNumber": "081234567899",
    "email": "supriadi@shroomsync.id",
    "password": "PasswordAman123!",
    "farmName": "Kumbung Berkah Mandiri",
    "farmAddress": "Desa Cisarua, Lembang, Kab. Bandung Barat",
    "status": "ACTIVE"
  }
  ```
- **Update Petani:** `PUT /api/v1/admin/farmers/:id`
  ```json
  {
    "fullName": "Supriadi Update",
    "phoneNumber": "081234567899",
    "email": "supriadi.baru@shroomsync.id",
    "farmName": "Kumbung Makmur Jaya",
    "farmAddress": "Jl. Kolonel Masturi No. 12",
    "status": "ACTIVE"
  }
  ```
- **Hapus Akun Petani:** `DELETE /api/v1/admin/farmers/:id`
  - *Catatan:* Secara otomatis melepaskan (*unassign*) seluruh perangkat unit milik petani kembali ke status `READY`, menghapus jadwal panen/kontrol terkait, dan mem-publish sinyal nonaktif ke perangkat fisik via MQTT.

### 3. Penugasan & Pelepasan Perangkat (Device Assignment)
- **Daftar Seluruh Perangkat:** `GET /api/v1/admin/devices`
- **Tugaskan Kumbung ke Petani:** `POST /api/v1/admin/devices/assign`
  ```json
  {
    "deviceId": "uuid-device-atau-serial",
    "farmerId": "uuid-farmer"
  }
  ```
- **Lepaskan Kumbung dari Petani:** `POST /api/v1/admin/devices/:deviceId/unassign`

---

## 🔧 Fitur Teknisi (Technician Routes)

Semua rute teknisi berada di bawah prefix `/api/v1/technician/*` dan membutuhkan header `Authorization: Bearer <token>` dengan akun ber-role `TECHNICIAN`.

### 1. Dashboard Diagnostik Hardware & IoT
- **Method & Route:** `GET /api/v1/technician/dashboard`
- **Response (200):** Metrik kesehatan mikrokontroler ESP32, tingkat uptime perangkat, diagnostik sinyal WiFi/RSSI, dan sebaran versi firmware.

### 2. Rekomendasi Serial Number Otomatis
- **Method & Route:** `GET /api/v1/technician/next-serial`
- **Response (200):**
  ```json
  {
    "status": "success",
    "data": {
      "nextSerial": "SS-1026-002",
      "prefix": "SS",
      "monthYear": "1026",
      "sequence": 2
    }
  }
  ```

### 3. Provisioning & Manajemen Perangkat Keras ESP32
- **Daftar Inventaris Alat:** `GET /api/v1/technician/devices?page=1&limit=50&status=ALL`
- **Registrasi Perangkat Baru (Generate Serial & Kode Aktivasi):** `POST /api/v1/technician/devices`
  ```json
  {
    "serialNumber": "SS-1026-002",
    "name": "Kumbung C - Shiitake",
    "model": "SS-ESP32-V1",
    "hardwareVersion": "1.0",
    "firmwareVersion": "1.1.0",
    "ownershipType": "RENTED"
  }
  ```
- **Detail Hardware:** `GET /api/v1/technician/devices/:id`
- **Unduh File Identitas Hardware (`device_info.json`):** `GET /api/v1/technician/devices/:id/identity`
  - Digunakan teknisi untuk flashing langsung ke partisi LittleFS ESP32 sebelum pengiriman ke petani.
- **Update Hardware / Status:** `PUT /api/v1/technician/devices/:id`
- **Hapus Perangkat Fisik:** `DELETE /api/v1/technician/devices/:id`

### 4. Manajemen Akun Petani oleh Teknisi
- **Daftar Seluruh Petani:** `GET /api/v1/technician/farmers`
- **Pendaftaran Petani Baru:** `POST /api/v1/technician/farmers`
- **Detail Petani:** `GET /api/v1/technician/farmers/:id`
- **Update Petani:** `PUT /api/v1/technician/farmers/:id`
- **Hapus Petani:** `DELETE /api/v1/technician/farmers/:id`

### 5. Manajemen Akun Administrator Sistem
- **Daftar Seluruh Admin:** `GET /api/v1/technician/admins`
- **Pembuatan Akun Admin Baru:** `POST /api/v1/technician/admins`
  ```json
  {
    "fullName": "Admin Regional Jawa Barat",
    "phoneNumber": "081299998888",
    "email": "admin.jabar@shroomsync.id",
    "password": "PasswordAdmin123!"
  }
  ```
- **Ubah Status Admin (Aktif / Nonaktif):** `PUT /api/v1/technician/admins/:id/status`
  ```json
  {
    "status": "ACTIVE"
  }
  ```

---

## 📦 Manajemen Firmware Binary & Pembaruan OTA (Over-The-Air)

### 1. Upload Berkas Binary Firmware Baru
- **Method & Route:** `POST /api/v1/technician/firmwares`
- **Headers:** `Authorization: Bearer <token>`, `Content-Type: multipart/form-data`
- **Form Data:**
  - `firmware`: Berkas file biner `.bin` (hasil build PlatformIO)
  - `version`: String versi firmware (contoh: `"1.2.0"`)
  - `hardwareVersion`: String kompatibilitas hardware (contoh: `"1.0"`)
  - `changelog`: Catatan rilis pembaruan
  - `isLatest`: Boolean (`true` jika dijadikan target rilis default)
- **Response (201):** Menyimpan berkas, menghitung SHA-256 checksum otomatis, dan mencatat rilis di database.

### 2. Daftar & Detail Firmware
- **List Firmware:** `GET /api/v1/technician/firmwares`
- **Detail Firmware:** `GET /api/v1/technician/firmwares/:id`
- **Hapus Firmware:** `DELETE /api/v1/technician/firmwares/:id`

### 3. Endpoint Publik untuk ESP32 & Mobile App
- **Cek Versi Firmware Terbaru:** `GET /api/v1/firmwares/latest`
  - Mengembalikan versi terbaru, URL download OTA, ukuran berkas, dan checksum SHA-256.
- **Download File Biner OTA:** `GET /api/v1/firmwares/download/:filename`
  - Melayani stream biner HTTP langsung untuk modul OTA Update ESP32.

### 4. Operasi Deployment OTA
- **Trigger OTA Spesifik:** `POST /api/v1/technician/ota/trigger`
  ```json
  {
    "deviceSerial": "SS-1026-001",
    "firmwareId": "uuid-firmware-opsional",
    "force": false
  }
  ```
- **Trigger OTA via Path:** `POST /api/v1/technician/ota/trigger/:deviceId`
- **Broadcast OTA Massal:** `POST /api/v1/technician/ota/broadcast`
  ```json
  {
    "firmwareId": "uuid-firmware-opsional",
    "force": false
  }
  ```
- **Riwayat Log Audit OTA:** `GET /api/v1/technician/ota/logs?limit=50&page=1`
- **Log OTA Perangkat Tertentu:** `GET /api/v1/technician/ota/logs/:deviceId`

---

## 📖 Dokumentasi Interaktif Swagger / OpenAPI
Dokumentasi interaktif Swagger UI siap pakai dan dapat dicoba langsung melalui browser:
- **Swagger UI:** `https://api.shroomsync.web.id/api/docs`
- **Swagger UI (v1):** `https://api.shroomsync.web.id/api/v1/docs`

