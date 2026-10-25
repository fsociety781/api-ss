# 🌾 ShroomSync API Documentation — Role Petani (Farmer)

Dokumentasi lengkap REST API ShroomSync khusus untuk role **FARMER (Petani)**.
Dokumentasi ini mencakup seluruh endpoint yang dapat diakses oleh akun petani untuk mengelola kumbung jamur, memantau telemetri sensor, mengontrol aktuator (pompa, misting, kipas), menerapkan preset budidaya, menjadwalkan otomatisasi, hingga mencatat siklus tanam dan hasil panen.

---

## 🌐 Base URL & Header Otentikasi

- **Base URL:**
  - Production: `https://api.shroomsync.web.id/api/v1`
  - Local Dev: `http://localhost:3000/api/v1`
- **Swagger UI Interaktif:** [https://api.shroomsync.web.id/api/docs/](https://api.shroomsync.web.id/api/docs/)

### Format Header HTTP
Sebagian besar endpoint memerlukan token JWT dari proses login:
```http
Authorization: Bearer <access_token>
Content-Type: application/json
```

---

## 📑 Daftar Isi
1. [Autentikasi & Akun Profil](#1-autentikasi--profil-petani)
2. [Dashboard & Ringkasan Kumbung](#2-dashboard--ringkasan-kumbung)
3. [Manajemen Perangkat Kumbung (Claim & Unclaim)](#3-manajemen-perangkat-kumbung)
4. [Kontrol Aktuator & Pengaturan Suhu/Kelembapan](#4-kontrol-aktuator--pengaturan)
5. [Preset Budidaya Jamur](#5-preset-budidaya-jamur)
6. [Analitik Lingkungan & Riwayat Telemetri](#6-analitik-lingkungan--riwayat-telemetri)
7. [Jadwal Otomatisasi (Schedules)](#7-jadwal-otomatisasi-schedules)
8. [Manajemen Siklus Tanam & Catatan Panen](#8-siklus-budidaya--catatan-panen)

---

## 1. Autentikasi & Profil Petani

### 1.1 Login Petani
Digunakan oleh aplikasi mobile atau web untuk autentikasi petani.

- **Endpoint:** `POST /auth/login`
- **Akses:** Publik
- **Request Body:**
  ```json
  {
    "identifier": "08123456789", // atau email "petani@shroomsync.id"
    "password": "password123"
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Login berhasil",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "c1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c",
        "email": "petani@shroomsync.id",
        "fullName": "Pak Joko Santoso",
        "phone": "08123456789",
        "role": "FARMER",
        "farmName": "Kumbung Berkah Mandiri",
        "farmAddress": "Jl. Kaliurang Km 12, Sleman, Yogyakarta",
        "onboardingStep": 3,
        "isProfileComplete": true
      }
    }
  }
  ```

---

### 1.2 Mendapatkan Profil Saya
Mendapatkan data akun yang sedang login beserta status kelengkapan profil.

- **Endpoint:** `GET /auth/me`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": {
      "id": "c1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c",
      "email": "petani@shroomsync.id",
      "fullName": "Pak Joko Santoso",
      "phone": "08123456789",
      "role": "FARMER",
      "avatarUrl": "https://api.shroomsync.web.id/avatars/user1.jpg",
      "farmName": "Kumbung Berkah Mandiri",
      "farmAddress": "Jl. Kaliurang Km 12, Sleman, Yogyakarta"
    }
  }
  ```

---

### 1.3 Perbarui Profil Petani
Memperbarui informasi nama, nomor kontak, foto profil, nama pertanian, dan alamat.

- **Endpoint:** `PUT /auth/profile`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "fullName": "Pak Joko Santoso S.Pt.",
    "phone": "081298765432",
    "avatarUrl": "https://storage.googleapis.com/shroomsync/avatars/farmer-joko.jpg",
    "farmName": "Kumbung Jamur Berkah Tiram",
    "farmAddress": "Dusun Candisari RT 02/05, Pakem, Sleman"
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Profil berhasil diperbarui",
    "data": {
      "id": "c1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c",
      "fullName": "Pak Joko Santoso S.Pt.",
      "farmName": "Kumbung Jamur Berkah Tiram"
    }
  }
  ```

---

### 1.4 Ganti Kata Sandi
- **Endpoint:** `POST /auth/change-password`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "oldPassword": "passwordLama123",
    "newPassword": "passwordBaruRahasia456"
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Kata sandi berhasil diubah"
  }
  ```

---

### 1.5 Daftarkan Token Notifikasi Firebase (FCM)
Digunakan aplikasi mobile agar petani menerima alert lonjakan suhu/kelembapan secara real-time.

- **Endpoint:** `POST /auth/fcm-token`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "fcmToken": "eAbCdEf123456789:APA91b..."
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "FCM token berhasil didaftarkan"
  }
  ```

---

## 2. Dashboard & Ringkasan Kumbung

### 2.1 Mendapatkan Ringkasan Dashboard Petani
Memberikan gambaran umum seluruh perangkat petani, status koneksi (online/offline), telemetri sensor terakhir, indikator alert otomatis (jika suhu/kelembapan keluar dari batas aman), dan log aktivitas terakhir.

- **Endpoint:** `GET /farmer/dashboard`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": {
      "totalDevices": 2,
      "onlineDevices": 2,
      "offlineDevices": 0,
      "devicesWithAlerts": 1,
      "devices": [
        {
          "id": "dev-01",
          "serialNumber": "SS-KMB-001",
          "name": "Kumbung Tiram A",
          "status": "ACTIVE",
          "controlMode": "AUTO",
          "isOnline": true,
          "lastSeenAt": "2026-10-25T11:45:00.000Z",
          "latestReading": {
            "temperature": 29.4,
            "humidity": 78.5,
            "recordedAt": "2026-10-25T11:45:00.000Z"
          },
          "activeActuators": 1,
          "totalActuators": 4,
          "alerts": [
            "Suhu melebihi ambang batas maksimal",
            "Kelembapan terlalu rendah"
          ]
        }
      ],
      "recentActivity": [
        {
          "id": "log-101",
          "action": "TURN_ON",
          "deviceName": "Kumbung Tiram A",
          "actuatorName": "Pompa Kabut Misting",
          "requestedAt": "2026-10-25T11:40:12.000Z",
          "success": true
        }
      ]
    }
  }
  ```

---

## 3. Manajemen Perangkat Kumbung

### 3.1 Klaim Perangkat Baru
Petani menautkan perangkat IoT baru ke akunnya menggunakan nomor seri dan kode aktivasi yang diberikan teknisi.

- **Endpoint:** `POST /farmer/devices/claim`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "serialNumber": "SS-KMB-002",
    "activationCode": "ACT-98213",
    "name": "Kumbung Jamur Barat" // Opsional
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Perangkat berhasil diklaim dan ditautkan ke akun Anda",
    "data": {
      "id": "dev-uuid-002",
      "serialNumber": "SS-KMB-002",
      "name": "Kumbung Jamur Barat",
      "status": "ACTIVE",
      "controlMode": "AUTO",
      "actuators": [
        { "id": "act-1", "name": "Pompa Semprot", "type": "PUMP", "state": "OFF" },
        { "id": "act-2", "name": "Kipas Ventilasi", "type": "FAN", "state": "OFF" }
      ]
    }
  }
  ```

---

### 3.2 Daftar Semua Perangkat Milik Petani
- **Endpoint:** `GET /farmer/devices`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "dev-uuid-001",
        "serialNumber": "SS-KMB-001",
        "name": "Kumbung Utama",
        "status": "ACTIVE",
        "controlMode": "AUTO",
        "actuators": [...],
        "setting": {
          "minTemperature": 24,
          "maxTemperature": 28,
          "minHumidity": 80,
          "maxHumidity": 95
        }
      }
    ]
  }
  ```

---

### 3.3 Detail Lengkap Perangkat
Mendapatkan detail 1 perangkat termasuk konfigurasi parameter, daftar aktuator, 20 data sensor terakhir, riwayat kontrol, dan jadwal otomatisasi.

- **Endpoint:** `GET /farmer/devices/:id`
- **Akses:** Petani (Bearer Token)
- **Parameter URL:** `id` (Device ID)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": {
      "id": "dev-uuid-001",
      "serialNumber": "SS-KMB-001",
      "name": "Kumbung Utama",
      "controlMode": "AUTO",
      "setting": {
        "minTemperature": 24.0,
        "maxTemperature": 28.0,
        "minHumidity": 85.0,
        "maxHumidity": 95.0,
        "telemetryIntervalSec": 60
      },
      "actuators": [
        { "id": "act-1", "name": "Misting Utama", "state": "ON", "type": "PUMP" }
      ],
      "sensorReadings": [ ... ],
      "schedules": [ ... ]
    }
  }
  ```

---

### 3.4 Lepas Perangkat (Unclaim)
Melepaskan perangkat dari akun petani (misalnya ketika perangkat dipindahtangankan).

- **Endpoint:** `POST /farmer/devices/:id/unclaim`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Perangkat berhasil dilepas dari akun Anda",
    "data": null
  }
  ```

---

## 4. Kontrol Aktuator & Pengaturan

### 4.1 Ubah Mode Kontrol Perangkat
Mengatur cara sistem mengendalikan aktuator:
- `MANUAL`: Kontrol murni manual via aplikasi/web.
- `AUTO`: Kontrol otomatis berdasarkan ambang batas sensor suhu & kelembapan.
- `HYBRID`: Gabungan kontrol otomatis dengan toleransi intervensi manual.
- `SCHEDULE`: Kontrol berdasarkan waktu/jadwal yang ditentukan.

- **Endpoint:** `POST /farmer/devices/:id/control/mode`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "mode": "AUTO" // "MANUAL" | "AUTO" | "HYBRID" | "SCHEDULE"
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Mode kontrol perangkat berhasil diubah menjadi AUTO",
    "data": {
      "id": "dev-uuid-001",
      "controlMode": "AUTO"
    }
  }
  ```

---

### 4.2 Nyalakan / Matikan Aktuator Spesifik
Mengubah status relay aktuator tertentu (misal: menyalakan pompa kabut).

- **Endpoint:** `POST /farmer/devices/:id/actuators/:actuatorId/toggle`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "action": "TURN_ON" // "TURN_ON" | "TURN_OFF"
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Status aktuator Pompa Kabut berhasil diubah menjadi ON",
    "data": {
      "id": "act-1",
      "state": "ON",
      "lastChangedAt": "2026-10-25T11:50:00.000Z"
    }
  }
  ```

---

### 4.3 Sakelar Massal / Darurat (Bulk Toggle)
Menyalakan atau mematikan seluruh aktuator dengan tipe tertentu pada semua kumbung milik petani secara serentak (contoh: matikan seluruh pompa saat musim hujan ekstrem).

- **Endpoint:** `POST /farmer/devices/bulk-toggle`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "actuatorType": "PUMP", // "PUMP" | "MISTING" | "FLOOR" | "LIGHT" | "OTHER"
    "action": "TURN_OFF"    // "TURN_ON" | "TURN_OFF"
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Berhasil mengubah status 3 aktuator 'PUMP' menjadi OFF",
    "data": {
      "affectedActuators": 3,
      "targetState": "OFF"
    }
  }
  ```

---

### 4.4 Perbarui Parameter Ambang Batas Suhu & Kelembapan
Mengatur batas ideal lingkungan kumbung untuk mode otomasi.

- **Endpoint:** `PUT /farmer/devices/:id/settings`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "minTemperature": 24.0,
    "maxTemperature": 28.5,
    "minHumidity": 82.0,
    "maxHumidity": 95.0,
    "timerDurationSeconds": 180,
    "telemetryIntervalSec": 60
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Pengaturan setpoint dan parameter berhasil diperbarui",
    "data": {
      "deviceId": "dev-uuid-001",
      "minTemperature": 24.0,
      "maxTemperature": 28.5,
      "minHumidity": 82.0,
      "maxHumidity": 95.0,
      "timerDurationSeconds": 180,
      "telemetryIntervalSec": 60
    }
  }
  ```

---

## 5. Preset Budidaya Jamur

### 5.1 Daftar Rekomendasi Preset Jamur
Mendapatkan preset parameter ideal berdasarkan jenis jamur (Tiram Putih, Jamur Kuping, Jamur Kancing, Jamur Shiitake).

- **Endpoint:** `GET /farmer/presets`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "oyster_growth",
        "name": "Jamur Tiram (Fase Pertumbuhan Tubuh Buah)",
        "minTemperature": 24,
        "maxTemperature": 28,
        "minHumidity": 85,
        "maxHumidity": 95,
        "description": "Suhu sejuk dengan kelembapan tinggi untuk memicu pertumbuhan tudung jamur tiram."
      },
      {
        "id": "ear_mushroom",
        "name": "Jamur Kuping",
        "minTemperature": 26,
        "maxTemperature": 30,
        "minHumidity": 80,
        "maxHumidity": 90,
        "description": "Optimal untuk jamur kuping hitam."
      }
    ]
  }
  ```

---

### 5.2 Terapkan Preset Langsung ke Kumbung
Otomatis mengonfigurasi batas suhu dan kelembapan perangkat sesuai preset yang dipilih.

- **Endpoint:** `POST /farmer/devices/:id/presets/apply`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "presetId": "oyster_growth"
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Preset 'Jamur Tiram (Fase Pertumbuhan Tubuh Buah)' berhasil diterapkan ke Kumbung Utama",
    "data": {
      "presetApplied": "Jamur Tiram (Fase Pertumbuhan Tubuh Buah)",
      "setting": {
        "minTemperature": 24,
        "maxTemperature": 28,
        "minHumidity": 85,
        "maxHumidity": 95
      }
    }
  }
  ```

---

## 6. Analitik Lingkungan & Riwayat Telemetri

### 6.1 Analisis Statistik Lingkungan (% Kesehatan Kumbung)
Menghitung rata-rata suhu, kelembapan, nilai min/max, dan skor persentase kesehatan lingkungan (seberapa lama kondisi berada di rentang optimal target).

- **Endpoint:** `GET /farmer/devices/:id/analytics?hours=24`
- **Akses:** Petani (Bearer Token)
- **Query Params:**
  - `hours`: Jumlah jam terakhir (default: `24`)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": {
      "periodHours": 24,
      "dataPoints": 288,
      "temperature": {
        "current": 26.8,
        "avg": 26.1,
        "min": 23.5,
        "max": 28.2
      },
      "humidity": {
        "current": 88.4,
        "avg": 86.7,
        "min": 81.0,
        "max": 94.2
      },
      "optimalEnvironmentalHealthPercent": 94.5,
      "settings": {
        "minTemperature": 24,
        "maxTemperature": 28,
        "minHumidity": 80,
        "maxHumidity": 95
      }
    }
  }
  ```

---

### 6.2 Riwayat Pembacaan Sensor (Grafik Telemetri)
Mengambil daftar log sensor untuk digambar pada grafik garis suhu & kelembapan.

- **Endpoint:** `GET /farmer/devices/:id/telemetry?limit=50`
- **Akses:** Petani (Bearer Token)
- **Query Params:**
  - `limit`: Jumlah data poin (default: `50`, max: `500`)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "1001",
        "deviceId": "dev-uuid-001",
        "temperature": 26.4,
        "humidity": 87.5,
        "recordedAt": "2026-10-25T11:00:00.000Z"
      },
      {
        "id": "1002",
        "deviceId": "dev-uuid-001",
        "temperature": 26.7,
        "humidity": 86.8,
        "recordedAt": "2026-10-25T11:05:00.000Z"
      }
    ]
  }
  ```

---

### 6.3 Riwayat Log Kontrol Aktuator
- **Endpoint:** `GET /farmer/devices/:id/logs?limit=20`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "501",
        "action": "TURN_ON",
        "source": "MOBILE_APP",
        "mode": "MANUAL",
        "success": true,
        "message": "Aktuator Misting diubah menjadi ON",
        "requestedAt": "2026-10-25T10:15:30.000Z",
        "actuator": {
          "id": "act-1",
          "name": "Misting Utama",
          "type": "PUMP"
        }
      }
    ]
  }
  ```

---

## 7. Jadwal Otomatisasi (Schedules)

### 7.1 Daftar Jadwal Aktif
- **Endpoint:** `GET /farmer/devices/:id/schedules`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "sch-01",
        "deviceId": "dev-uuid-001",
        "actuatorId": "act-1",
        "name": "Penyiraman Pagi Jam 07:00",
        "action": "TURN_ON",
        "startMinute": 420, // 07:00 pagi (7 * 60)
        "durationSeconds": 300, // 5 menit
        "daysOfWeek": [1, 2, 3, 4, 5, 6, 0], // Tiap hari (0 = Minggu, 1 = Senin)
        "isEnabled": true,
        "actuator": {
          "id": "act-1",
          "name": "Misting Utama"
        }
      }
    ]
  }
  ```

---

### 7.2 Tambah Jadwal Baru
- **Endpoint:** `POST /farmer/devices/:id/schedules`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "actuatorId": "act-1",
    "name": "Penyemprotan Sore",
    "action": "TURN_ON",
    "startMinute": 960, // Jam 16:00 (16 * 60)
    "durationSeconds": 180, // 3 menit
    "daysOfWeek": [1, 2, 3, 4, 5], // Senin s/d Jumat
    "isEnabled": true
  }
  ```
- **Response Success (201 Created):**
  ```json
  {
    "status": "success",
    "message": "Jadwal otomatisasi berhasil ditambahkan",
    "data": {
      "id": "sch-02",
      "name": "Penyemprotan Sore",
      "isEnabled": true
    }
  }
  ```

---

### 7.3 Hapus Jadwal
- **Endpoint:** `DELETE /farmer/devices/:id/schedules/:scheduleId`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Jadwal berhasil dihapus",
    "data": null
  }
  ```

---

## 8. Siklus Budidaya & Catatan Panen

Petani dapat mengelola siklus pertumbuhan jamur (batch tanam) dan mencatat bobot hasil panen per siklus.

### 8.1 Daftar Siklus Budidaya
- **Endpoint:** `GET /devices/:deviceId/cycles`
- **Akses:** Petani (Bearer Token)
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "cyc-01",
        "name": "Batch Tiram Musim Hujan 2026",
        "mushroomType": "Tiram Putih",
        "baglogCount": 1500,
        "status": "ACTIVE",
        "startDate": "2026-10-01T00:00:00.000Z",
        "harvestCount": 2,
        "totalYieldKg": 48.5
      }
    ]
  }
  ```

---

### 8.2 Mulai Siklus Tanam Baru
- **Endpoint:** `POST /devices/:deviceId/cycles`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "name": "Batch Jamur Tiram A1",
    "mushroomType": "Tiram Putih",
    "baglogCount": 2000,
    "startDate": "2026-10-25T00:00:00.000Z",
    "notes": "Bibit F3 dari lab Agrikultur"
  }
  ```
- **Response Success (201 Created):**
  ```json
  {
    "status": "success",
    "message": "Siklus tanam berhasil dibuat",
    "data": {
      "id": "cyc-02",
      "status": "ACTIVE"
    }
  }
  ```

---

### 8.3 Catat Hasil Panen Baru
Mencatat panen harian/berkala pada siklus yang sedang aktif.

- **Endpoint:** `POST /devices/:deviceId/cycles/:cycleId/harvests`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "harvestDate": "2026-10-25T07:30:00.000Z",
    "weightKg": 24.8,
    "quality": "GRADE_A", // "GRADE_A" | "GRADE_B" | "GRADE_C"
    "notes": "Tudung mekar sempurna, warna putih bersih"
  }
  ```
- **Response Success (201 Created):**
  ```json
  {
    "status": "success",
    "message": "Data panen berhasil disimpan",
    "data": {
      "id": "harv-01",
      "cycleId": "cyc-02",
      "weightKg": 24.8,
      "quality": "GRADE_A"
    }
  }
  ```

---

### 8.4 Selesaikan Siklus Budidaya
Digunakan saat baglog jamur sudah habis masa produktifnya (afkir).

- **Endpoint:** `POST /devices/:deviceId/cycles/:cycleId/complete`
- **Akses:** Petani (Bearer Token)
- **Request Body:**
  ```json
  {
    "endDate": "2026-12-15T00:00:00.000Z",
    "summaryNotes": "Total hasil memuaskan melampaui target 1.2 kg per 10 baglog."
  }
  ```
- **Response Success (200 OK):**
  ```json
  {
    "status": "success",
    "message": "Siklus tanam telah diselesaikan",
    "data": {
      "id": "cyc-02",
      "status": "COMPLETED"
    }
  }
  ```

---

## ⚡ Kode Status & Penanganan Error

Format standar response error dari server:
```json
{
  "status": "error",
  "message": "Pesan deskripsi kesalahan yang mudah dipahami",
  "code": "BAD_REQUEST | UNAUTHORIZED | FORBIDDEN | NOT_FOUND | CONFLICT | VALIDATION_ERROR",
  "timestamp": "2026-10-25T11:54:00.000Z"
}
```

| HTTP Code | Error Code | Penyebab Umum |
|:---|:---|:---|
| **400** | `BAD_REQUEST` / `VALIDATION_ERROR` | Format body JSON tidak sesuai, nilai angka melebihi batas, atau parameter kurang. |
| **401** | `UNAUTHORIZED` | Token JWT hilang, kedaluwarsa, atau salah. |
| **403** | `FORBIDDEN` | Akun bukan role `FARMER` atau mencoba mengakses perangkat milik petani lain. |
| **404** | `NOT_FOUND` | Device ID, Actuator ID, atau Schedule ID tidak ditemukan. |
| **409** | `CONFLICT` | Perangkat sudah diklaim oleh petani lain. |
| **429** | `TOO_MANY_REQUESTS` | Melebihi batas rate limit request API per menit. |
| **500** | `INTERNAL_SERVER_ERROR` | Terjadi kesalahan sistem di server backend. |
