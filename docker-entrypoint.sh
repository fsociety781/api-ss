#!/bin/sh
set -e

echo "🍄 [ShroomSync] Memeriksa koneksi database dan melakukan sinkronisasi Prisma..."
npx prisma db push --skip-generate

echo "🚀 [ShroomSync] Memulai server ShroomSync API..."
exec "$@"
