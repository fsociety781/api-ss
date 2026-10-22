#!/bin/sh
set -e

echo "🍄 [ShroomSync] Memeriksa & menjalankan migrasi database Prisma..."
if npx prisma migrate deploy; then
  echo "✅ Migrasi Prisma berhasil diterapkan."
else
  echo "⚠️  prisma migrate deploy gagal, mencoba sinkronisasi via prisma db push..."
  if npx prisma db push --accept-data-loss; then
    echo "✅ Prisma db push berhasil."
  else
    echo "⚠️  Peringatan: Migrasi database gagal atau database belum siap, melanjutkan proses startup..."
  fi
fi

echo "🚀 [ShroomSync] Memulai server ShroomSync API..."
exec "$@"
