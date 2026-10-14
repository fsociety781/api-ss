# 🌐 Panduan Resmi Integrasi Frontend ShroomSync (Production Contract)

Dokumen ini adalah **kontrak dan panduan teknis integrasi resmi** ShroomSync Backend API Service v2.0.0 untuk tim pengembang antarmuka (Web Dashboard & Mobile App). 

Dokumen ini memuat alur kerja nyata, skema data presisi, aturan otorisasi, dan parameter integrasi untuk seluruh 3 peran: **TEKNISI**, **ADMINISTRATOR**, dan **PETANI**.

---

## 📌 Standar Komunikasi & Arsitektur

### 1. Base URL
- **Local Development**: `http://localhost:3000/api/v1`
- **Swagger UI Interactive**: `http://localhost:3000/api/docs`

### 2. Standar Headers
Setiap request wajib menyertakan:
```http
Content-Type: application/json
Accept: application/json
```
Untuk endpoint terproteksi, wajib menyertakan token JWT:
```http
Authorization: Bearer <jwt_token>
```

### 3. Struktur Amplop Respon (Response Envelope)

#### A. Respon Berhasil (HTTP 200 / 201)
```json
{
  "status": "success",
  "message": "Deskripsi hasil operasi",
  "data": { ... },
  "pagination": {
    "total": 50,
    "limit": 20,
    "offset": 0,
    "hasMore": true
  }
}
```
*(Properti `pagination` bersifat kondisional, hanya hadir pada endpoint berhalaman).*

#### B. Respon Gagal (HTTP 4xx / 5xx)
```json
{
  "status": "error",
  "message": "Pesan deskripsi kegagalan",
  "code": "KODE_ERROR_UNIK",
  "errors": [ ... ],
  "timestamp": "2026-10-12T16:00:00.000Z"
}
```

---

## 🔐 MODUL 1: AUTENTIKASI GLOBAL & ONBOARDING

### 1. Login Akun (Semua Role: Petani, Teknisi, Admin)
- **Endpoint:** `POST /auth/login`
- **Akses:** Publik (Rate limit: 15 req / 15 menit)
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `identifier` | string | Ya | Nomor telepon (`08...`) atau email pengguna |
  | `password` | string | Ya | Kata sandi akun |

- **Response Data (HTTP 200):**
  ```json
  {
    "status": "success",
    "message": "Login berhasil",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "cuid-user",
        "name": "Budi Santoso",
        "phoneNumber": "081234567890",
        "email": "petani@shroomsync.id",
        "role": "FARMER",
        "status": "ACTIVE",
        "profileCompleted": false,
        "mustChangePassword": true
      }
    }
  }
  ```

### 2. Aturan Navigasi Setelah Login (Routing Logic di Frontend)
Segera setelah login berhasil:
1. Simpan `token` di Secure Storage / LocalStorage dan lampirkan ke Header `Authorization`.
2. Periksa properti `role`:
   - Jika `role === "TECHNICIAN"` ➡️ Arahkan ke Portal Teknisi.
   - Jika `role === "ADMIN"` ➡️ Arahkan ke Portal Administrator.
   - Jika `role === "FARMER"`:
     - Jika `mustChangePassword === true` atau `profileCompleted === false` ➡️ **WAJIB kunci navigasi dan tampilkan layar Onboarding**.
     - Jika sudah lengkap ➡️ Arahkan ke Dashboard Petani.

### 3. Selesaikan Onboarding Petani (Complete Onboarding)
- **Endpoint:** `POST /auth/complete-onboarding`
- **Akses:** Khusus Petani (`Authorization: Bearer <token>`)
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `newPassword` | string | Ya | Kata sandi baru (minimal 8 karakter) |
  | `name` | string | Tidak | Nama lengkap petani |
  | `address` | string | Tidak | Lokasi / alamat kumbung |
  | `farmName` | string | Tidak | Nama usaha / kelompok tani |
  | `mushroomType` | string | Tidak | Jenis varietas utama (misal: Jamur Tiram Putih) |

- **Response (HTTP 200):** Menghasilkan profil pengguna yang telah berstatus `profileCompleted: true` dan `mustChangePassword: false`.

### 4. Ambil Profil Sesi Aktif
- **Endpoint:** `GET /auth/me`
- **Akses:** Semua Role terautentikasi.

---

## 🔧 MODUL 2: INTEGRASI FITUR TEKNISI (PORTAL TEKNISI)
> Seluruh rute teknisi berada di bawah `/api/v1/technician/*` dan membutuhkan token dengan `role: "TECHNICIAN"`.

### Alur Kerja Teknisi:
1. Mendaftarkan unit mikrokontroler ESP32 baru yang selesai dirakit ke sistem.
2. Mendapatkan Serial Number dan Kode Aktivasi untuk dicetak pada stiker QR fisik alat.
3. Memantau kesehatan koneksi jaringan dan telemetri hardware.
4. Membuat dan mengelola akun Administrator regional.

### 1. Dashboard Diagnostik Hardware
- **Endpoint:** `GET /technician/dashboard`
- **Response Data (HTTP 200):**
  - `totalDevices`: Total seluruh alat yang terdaftar.
  - `activeDevices`: Jumlah alat yang terhubung aktif.
  - `offlineDevices`: Jumlah alat yang tidak mengirim heartbeat.
  - `totalAdmins`: Jumlah administrator aktif.
  - `hardwareBreakdown`: Distribusi versi hardware dan firmware.

### 2. Registrasi / Provisioning Alat Baru
- **Endpoint:** `POST /technician/devices`
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `serialNumber` | string | Ya | ID unik fisik (misal: `SS-0426-001`) |
  | `name` | string | Tidak | Nama unit default (misal: `Kumbung A`) |
  | `model` | string | Ya | Model node (misal: `ShroomSync Smart Node v2`) |
  | `hardwareVersion` | string | Tidak | Versi board (default: `1.0`) |
  | `firmwareVersion` | string | Tidak | Versi firmware ESP32 (default: `2.1.0`) |

- **Response Data (HTTP 201):**
  Mengembalikan objek alat lengkap dengan `activationCode` yang dihasilkan otomatis untuk di-*generate* menjadi stiker QR Code pada kotak mikrokontroler.

### 3. Daftar Inventaris Seluruh Hardware
- **Endpoint:** `GET /technician/devices?page=1&limit=20&status=READY`
- **Filter Query:** `status` (`READY`, `ACTIVE`, `OFFLINE`, `SUSPENDED`).

### 4. Detail Hardware
- **Endpoint:** `GET /technician/devices/:id`

### 5. Update Spesifikasi / Firmware Hardware
- **Endpoint:** `PUT /technician/devices/:id`
- **Request Body:** `name`, `model`, `hardwareVersion`, `firmwareVersion`, `status`.

### 6. Hapus Hardware
- **Endpoint:** `DELETE /technician/devices/:id`

### 7. Buat Akun Administrator Baru
- **Endpoint:** `POST /technician/admins`
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `fullName` | string | Ya | Nama administrator |
  | `phoneNumber` | string | Ya | Nomor telepon unik |
  | `email` | string | Tidak | Email admin |
  | `password` | string | Ya | Kata sandi awal (min 8 karakter) |

### 8. Daftar Seluruh Administrator
- **Endpoint:** `GET /technician/admins`

### 9. Ubah Status Aktif Administrator
- **Endpoint:** `PUT /technician/admins/:id/status`
- **Request Body:** `status: "ACTIVE" | "SUSPENDED" | "INACTIVE"`

---

## 👑 MODUL 3: INTEGRASI FITUR ADMINISTRATOR (PORTAL ADMIN)
> Seluruh rute admin berada di bawah `/api/v1/admin/*` dan membutuhkan token dengan `role: "ADMIN"` atau `"TECHNICIAN"`.

### Alur Kerja Admin:
1. Mendaftarkan petani binaan baru dan memberikan kredensial awal.
2. Memetakan dan menugaskan alat ESP32 kumbung ke petani tertentu.
3. Memantau statistik adopsi dan status operasional seluruh kumbung binaan.

### 1. Dashboard Statistik Ekosistem
- **Endpoint:** `GET /admin/dashboard`
- **Response Data (HTTP 200):**
  - `totalFarmers`: Jumlah total petani binaan terdaftar.
  - `totalDevices`: Total alat di wilayah binaan.
  - `assignedDevices`: Alat yang sudah aktif ditautkan ke petani.
  - `unassignedDevices`: Alat yang masih tersedia di gudang/belum diklaim.

### 2. Pendaftaran Akun Petani Baru
- **Endpoint:** `POST /admin/farmers`
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `fullName` | string | Ya | Nama petani |
  | `phoneNumber` | string | Ya | Nomor telepon unik (dipakai untuk login petani) |
  | `email` | string | Tidak | Email petani |
  | `password` | string | Ya | Kata sandi sementara (wajib diganti petani saat onboarding) |

### 3. Daftar Petani Binaan
- **Endpoint:** `GET /admin/farmers?limit=20&page=1`

### 4. Detail Petani & Daftar Kumbung yang Dimilikinya
- **Endpoint:** `GET /admin/farmers/:id`

### 5. Update Data Profil Petani
- **Endpoint:** `PUT /admin/farmers/:id`
- **Request Body:** `fullName`, `phoneNumber`, `email`, `status`.

### 6. Penugasan Alat ke Petani (Assign Device)
- **Endpoint:** `POST /admin/devices/assign`
- **Request Body:**
  ```json
  {
    "deviceId": "uuid-device-atau-serial",
    "farmerId": "uuid-farmer"
  }
  ```

### 7. Pelepasan Alat dari Petani (Unassign Device)
- **Endpoint:** `POST /admin/devices/:deviceId/unassign`

---

## 🌾 MODUL 4: INTEGRASI FITUR PETANI (APLIKASI PETANI)
> Akses menggunakan token dengan `role: "FARMER"`. Rute terpasang di `/api/v1/devices/*` dan `/api/v1/farmer/*`.

### Alur Kerja Petani:
1. Login dan aktivasi mandiri kumbung (scan QR atau ketik serial number).
2. Memantau dashboard multi-kumbung (suhu dalam/luar, kelembaban, pompa, status koneksi).
3. Mengatur kontrol (mode otomatis, setpoint varietas, durasi timer semprot, saklar manual).
4. Membuka siklus budidaya baru, memantau umur baglog, dan mencatat hasil panen harian.
5. Membaca ringkasan performa (*productivity yield per baglog*, panen puncak, omset).

---

### A. Manajemen Kumbung Petani

#### 1. Daftar Kumbung Milik Petani
- **Endpoint:** `GET /devices`
- **Headers:** `Authorization: Bearer <token>`
- **Response Data (HTTP 200):**
  Array daftar perangkat yang otomatis difilter hanya milik petani yang sedang login:
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "cuid-device",
        "deviceId": "SS-0426-001",
        "name": "Kumbung Barat - Tiram Putih",
        "hardwareVersion": "2.0",
        "firmwareVersion": "2.1.0",
        "isOnline": true,
        "rssiDbm": -65,
        "signalStrength": "Good",
        "uptimeMs": 3600000,
        "pumpStatus": "OFF",
        "floorPumpStatus": "OFF",
        "fanStatus": "OFF",
        "activatedAt": "2026-10-01T08:00:00.000Z",
        "lastSeenAt": "2026-10-12T16:20:00.000Z"
      }
    ]
  }
  ```

#### 2. Aktivasi / Tautkan Kumbung Baru (Scan QR / Input Serial Number)
- **Endpoint:** `POST /devices/activate`
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `deviceId` | string | Ya | Serial number dari barcode/QR (misal: `SS-0426-001`) |
  | `name` | string | Tidak | Nama kustom kumbung dari petani |

- **Response Gagal Jika Sudah Dimiliki Petani Lain (HTTP 409):**
  `message: "Perangkat ini sudah diaktivasi oleh akun petani lain. Hubungi admin sistem."`

#### 3. Lepaskan Tautan Kumbung (Unpair)
- **Endpoint:** `POST /devices/unpair/:deviceId` (atau `POST /devices/:deviceId/unpair`)

#### 4. Detail Kumbung & Konfigurasi Aktif
- **Endpoint:** `GET /devices/:deviceId`
- **Response Data (HTTP 200):** Mengembalikan objek status hardware beserta konfigurasi setting (`minTemperature`, `maxTemperature`, `minHumidity`, `maxHumidity`, `timerDurationSeconds`, `controlMode`).

---

### B. Kontrol Otomasi & Aktuator IoT
> Setiap instruksi yang dikirim otomatis disimpan di database dan di-broadcast ke broker MQTT (`{serialNumber}/cmd/*`).

#### 1. Ubah Mode Operasi Kumbung
- **Endpoint:** `POST /devices/:deviceId/control/mode`
- **Request Body:**
  | Field | Type | Pilihan Nilai | Keterangan |
  |---|---|---|---|
  | `controlMode` | integer / string | `1` / `"MANUAL"`<br>`2` / `"AUTO"`<br>`3` / `"SCHEDULE"` | Mode kontrol perangkat |

#### 2. Perbarui Ambang Setpoint Suhu & Kelembaban (Mode Otomatis)
- **Endpoint:** `POST /devices/:deviceId/setpoint`
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `minSuhu` | number | Ya | Ambang suhu minimal (°C) |
  | `midSuhu` | number | Ya | Ambang suhu maksimal/target pemadaman (°C) |
  | `minKelembaban` | number | Ya | Ambang kelembaban minimal (%) |
  | `midKelembaban` | number | Ya | Ambang kelembaban maksimal (%) |

#### 3. Durasi Timer Penyemprotan Pompa
- **Pompa Kabut Atas:** `POST /devices/:deviceId/timer`
  ```json
  { "timerMinute": 2, "timerSecond": 30 }
  ```
- **Pompa Sirkulasi Lantai:** `POST /devices/:deviceId/timer/floor` (alias: `.../floor-timer`)
  ```json
  { "floorTimerMinute": 1, "floorTimerSecond": 0 }
  ```

#### 4. Saklar Override Manual Aktuator (Pompa & Kipas)
- **Saklar Pompa:** `POST /devices/:deviceId/actuator/pump` (alias: `.../control/pump`)
  ```json
  { "state": "ON" } atau { "state": "OFF" }
  ```
  *(Dapat juga menerima boolean: `{ "on": true }` / `{ "on": false }`)*
- **Saklar Kipas / Pengabutan:** `POST /devices/:deviceId/actuator/fan` (alias: `.../control/fan`)
  ```json
  { "state": "ON" } atau { "state": "OFF" }
  ```

#### 5. Pemadaman Darurat (Emergency Stop)
- **Endpoint:** `POST /farmer/devices/:deviceId/emergency-stop`
- **Fungsi:** Mematikan seluruh aktuator seketika jika terjadi anomali kelistrikan/pipa bocor.

---

### C. Monitoring Telemetri Sensor

#### 1. Pembacaan Sensor Real-Time Terkini
- **Endpoint:** `GET /devices/:deviceId/telemetry/sensor/latest`
- **Response Data (HTTP 200):**
  ```json
  {
    "status": "success",
    "data": {
      "temperature": 25.4,
      "humidity": 88.5,
      "recordedAt": "2026-10-12T16:20:00.000Z",
      "isOnline": true
    }
  }
  ```

#### 2. Riwayat Sensor (Grafik & Rentang Waktu)
- **Endpoint:** `GET /devices/:deviceId/telemetry/sensor?from=2026-10-01T00:00:00.000Z&to=2026-10-12T23:59:59.000Z&limit=100`
- **Query Params:**
  - `from` (ISO Date): Batas awal riwayat.
  - `to` (ISO Date): Batas akhir riwayat.
  - `limit` (number, default: 50, max: 1000).

---

### D. Manajemen Siklus Budidaya Jamur (Cultivation Cycles)

#### 1. Memulai Siklus Baru
- **Endpoint:** `POST /devices/:deviceId/cycles`
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `name` | string | Ya | Nama siklus (misal: `Siklus Oktober 2026`) |
  | `mushroomType` | string | Ya | Jenis jamur (misal: `Jamur Tiram`) |
  | `strain` | string | Tidak | Varietas spesifik (misal: `Tiram Putih Florida`) |
  | `baglogCount` | integer | Ya | Jumlah total baglog yang dimasukkan |
  | `startedAt` | string (ISO Date) | Ya | Tanggal mulai pembibitan |
  | `expectedEndedAt` | string (ISO Date) | Tidak | Perkiraan tanggal pembongkaran baglog |
  | `notes` | string | Tidak | Catatan tambahan |

#### 2. Daftar Siklus Budidaya
- **Endpoint:** `GET /devices/:deviceId/cycles?status=active`

#### 3. Update Detail Siklus
- **Endpoint:** `PUT /devices/:deviceId/cycles/:cycleId` (atau `PATCH`)

#### 4. Tandai Siklus Selesai
- **Endpoint:** `POST /devices/:deviceId/cycles/:cycleId/complete`
- **Request Body:**
  ```json
  {
    "endedAt": "2026-11-30T00:00:00.000Z",
    "notes": "Siklus selesai 4 flush, kumbung disterilkan."
  }
  ```

#### 5. Ringkasan & Analisis Performa Siklus (Summary Analytics)
- **Endpoint:** `GET /devices/:deviceId/cycles/:cycleId/summary`
- **Response Data (HTTP 200):**
  ```json
  {
    "status": "success",
    "data": {
      "cycle": {
        "id": "cuid-siklus",
        "deviceId": "SS-0426-001",
        "name": "Siklus Oktober 2026",
        "mushroomType": "Jamur Tiram",
        "baglogCount": 1200,
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
        "yieldPerBaglogKg": 0.0688,
        "firstHarvestAt": "2026-10-05T08:00:00.000Z",
        "latestHarvestAt": "2026-10-12T08:30:00.000Z",
        "peakHarvestDay": {
          "date": "2026-10-12",
          "weightKg": 25.4
        }
      }
    }
  }
  ```

---

### E. Pencatatan Hasil Panen Harian (Harvest Records)

#### 1. Catat Timbangan Panen Baru
- **Endpoint:** `POST /devices/:deviceId/cycles/:cycleId/harvests`
- **Request Body:**
  | Field | Type | Wajib | Keterangan |
  |---|---|---|---|
  | `weightKg` | number | Ya | Berat panen dalam Kilogram (misal: `18.75`) |
  | `pricePerKg` | number | Tidak | Harga jual per kg (dipakai kalkulasi omset) |
  | `harvestedAt` | string (ISO Date) | Tidak | Waktu petik (default: waktu sekarang) |
  | `grade` | string | Tidak | Kualitas (misal: `A`, `B`, `Super`) |
  | `notes` | string | Tidak | Catatan (misal: `Panen pagi flush ke-2`) |

#### 2. Ambil Daftar Catatan Panen
- **Endpoint:** `GET /devices/:deviceId/cycles/:cycleId/harvests?limit=50&offset=0`

#### 3. Edit Catatan Panen
- **Endpoint:** `PUT /devices/:deviceId/cycles/:cycleId/harvests/:harvestId` (atau `PATCH`)

#### 4. Hapus Catatan Panen
- **Endpoint:** `DELETE /devices/:deviceId/cycles/:cycleId/harvests/:harvestId`

---

### F. Preset Varietas Cerdas (Mushroom Presets)

#### 1. Ambil Rekomendasi Parameter Budidaya
- **Endpoint:** `GET /farmer/presets`
- **Data Tersedia:** Standar agronomi resmi untuk varietas:
  - `tiram_putih` (Suhu: 24-28°C, RH: 80-95%)
  - `tiram_cokelat` (Suhu: 26-30°C, RH: 80-90%)
  - `jamur_kuping` (Suhu: 26-32°C, RH: 85-95%)
  - `shiitake` (Suhu: 18-24°C, RH: 80-90%)
  - `kancing` (Suhu: 16-20°C, RH: 85-92%)

#### 2. Terapkan Preset Sekali Klik
- **Endpoint:** `POST /farmer/devices/:deviceId/apply-preset`
- **Request Body:**
  ```json
  { "presetKey": "tiram_putih" }
  ```
  *(Otomatis memperbarui database setpoint dan mengirim perintah setpoint baru ke mikrokontroler via MQTT).*

---

## 🛑 DAFTAR KODE KESALAHAN & HTTP STATUS

Frontend wajib menangani kode status berikut:

| HTTP Status | Kode / Kondisi | Keterangan untuk UI |
|---|---|---|
| **400** | `VALIDATION_ERROR` | Format input salah (nomor HP tidak valid, angka minus, dsb). Tampilkan pesan validasi pada form. |
| **401** | `UNAUTHORIZED` | Token kadaluarsa / tidak ada token. Arahkan user ke halaman Login. |
| **403** | `FORBIDDEN` | Akses ditolak karena role akun tidak sesuai (misal Petani mencoba akses rute Teknisi). |
| **404** | `NOT_FOUND` | Perangkat, siklus, atau data tidak ditemukan. |
| **409** | `CONFLICT` | Nomor HP sudah terdaftar, atau Serial Number sudah diklaim oleh petani lain. |
| **429** | `RATE_LIMIT_EXCEEDED` | Batas request terlampaui. Tampilkan pemberitahuan agar menunggu beberapa saat. |
| **503** | `SERVICE_UNAVAILABLE` | Database atau MQTT sedang dalam pemeliharaan. |
