# 🍄 Panduan Deployment ShroomSync Backend Menggunakan Docker

Panduan ini menjelaskan langkah demi langkah cara men-deploy backend ShroomSync (`api-ss`) ke server VPS (Ubuntu/Debian) menggunakan Docker dan Docker Compose.

---

## 🏗️ 1. Arsitektur Kontainer

Sistem backend menggunakan 3 kontainer yang saling terhubung:
1. **`shroomsync_api`**: Node.js 20 Alpine, Express API, Prisma ORM v7, dan engine OTA Firmware (Port: `3000`).
2. **`shroomsync_postgres`**: Database PostgreSQL 16 Alpine (Port: `5432`).
3. **`shroomsync_emqx`**: MQTT Broker EMQX v5.8 untuk komunikasi real-time dengan ESP32-S3 (Port: `1883`, `8083`, `18083`).

Semua file firmware `.bin` yang diunggah disimpan di volume persisten (`api_storage`) sehingga tidak hilang saat kontainer di-restart atau di-update.

---

## ⚙️ 2. Persiapan di Server VPS (Ubuntu / Debian)

Hubungkan ke server VPS via SSH:
```bash
ssh root@IP_SERVER_ANDA
```

### Install Docker & Docker Compose:
Jalankan perintah resmi instalasi Docker berikut:
```bash
# Update paket sistem
sudo apt update && sudo apt upgrade -y

# Install Docker via skrip resmi
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Pasang Docker Compose plugin
sudo apt install -y docker-compose-plugin

# Cek versi untuk memastikan instalasi berhasil
docker --version
docker compose version
```

---

## 📥 3. Upload Kode Proyek ke Server

Pilih salah satu metode berikut:

### Metode A: Menggunakan Git (Direkomendasikan)
```bash
cd /opt
git clone https://github.com/USERNAME/api-ss.git shroomsync-api
cd shroomsync-api
```

### Metode B: Menggunakan SCP / Rsync dari Laptop Anda
Dari terminal laptop/komputer lokal Anda:
```bash
scp -r "d:\File Pribadi\Projek\SCM-PROJEK UPDATE\api-ss" root@IP_SERVER_ANDA:/opt/shroomsync-api
```

---

## 📝 4. Konfigurasi Environment (`.env`)

Di dalam folder proyek di server (`/opt/shroomsync-api`):
```bash
# Salin template environment docker
cp .env.docker.example .env

# Edit konfigurasi dengan nano
nano .env
```

Pastikan variabel-variabel kunci diisi dengan benar:
```env
POSTGRES_USER=shroom_admin
POSTGRES_PASSWORD=BuatPasswordDatabaseKuat123!
POSTGRES_DB=shroomsync_db

# PENTING: Isi dengan domain publik atau IP publik server Anda
# Digunakan oleh ESP32 untuk mendownload file .bin firmware
PUBLIC_API_URL=https://api.shroomsync.yourdomain.com
# Atau jika belum ada domain:
# PUBLIC_API_URL=http://IP_SERVER_ANDA:3000

JWT_SECRET=buat_string_acak_panjang_dan_rahasia_disini_2026

# Default akun teknisi pertama
DEFAULT_TECHNICIAN_EMAIL=technician@shroomsync.id
DEFAULT_TECHNICIAN_PASSWORD=ShroomSyncTech2026!
```
*(Tekan `Ctrl + O` lalu `Enter` untuk menyimpan, kemudian `Ctrl + X` untuk keluar dari nano).*

---

## 🚀 5. Build & Jalankan Kontainer

Jalankan perintah berikut untuk membangun image dan menyalakan semua service di background:
```bash
docker compose up -d --build
```

### Cek Status Kontainer:
```bash
docker compose ps
```
Pastikan status ketiga kontainer adalah `Up` atau `Up (healthy)`.

### Pantau Log Aplikasi:
```bash
# Pantau log API
docker compose logs -f api

# Pantau log database
docker compose logs -f postgres

# Pantau log MQTT broker
docker compose logs -f emqx
```

---

## 🔒 6. Setup Firewall & Port Server (UFW)

Pastikan port yang dibutuhkan sudah dibuka pada firewall server:
```bash
# Port Web & API
sudo ufw allow 80/tcp     # HTTP (Nginx / Certbot)
sudo ufw allow 443/tcp    # HTTPS
sudo ufw allow 3000/tcp   # API Direct Port (jika tanpa reverse proxy)

# Port MQTT untuk ESP32
sudo ufw allow 1883/tcp   # MQTT TCP
sudo ufw allow 8083/tcp   # MQTT WebSocket

# Port EMQX Dashboard (Opsional - Port Manajemen)
sudo ufw allow 18083/tcp

sudo ufw reload
```

---

## 🌐 7. Setup Domain & SSL HTTPS (Nginx Reverse Proxy)

Untuk produksi yang aman, gunakan Nginx sebagai reverse proxy dengan sertifikat gratis Let's Encrypt:

### Install Nginx & Certbot:
```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

### Buat Konfigurasi Nginx:
```bash
sudo nano /etc/nginx/sites-available/shroomsync.conf
```

Isi konfigurasi berikut:
```nginx
server {
    server_name api.shroomsync.yourdomain.com;

    client_max_body_size 25M; # Mendukung upload firmware hingga 25MB

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan konfigurasi dan pasang sertifikat SSL HTTPS otomatis:
```bash
sudo ln -s /etc/nginx/sites-available/shroomsync.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Pasang SSL Let's Encrypt
sudo certbot --nginx -d api.shroomsync.yourdomain.com
```

---

## 🔄 8. Cara Update Kode di Kemudian Hari

Jika ada perubahan kode baru dari git:
```bash
cd /opt/shroomsync-api
git pull
docker compose up -d --build api
```

Database schema akan otomatis disinkronkan secara aman oleh `docker-entrypoint.sh` saat kontainer baru menyala.
