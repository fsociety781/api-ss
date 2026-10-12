-- CreateTable
CREATE TABLE "cultivation_cycles" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "name" TEXT,
    "mushroomType" TEXT NOT NULL DEFAULT 'Jamur Tiram',
    "strain" TEXT,
    "baglogCount" INTEGER,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expectedEndedAt" TIMESTAMP(3),
    "endedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'active',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cultivation_cycles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "harvest_records" (
    "id" TEXT NOT NULL,
    "cycleId" TEXT NOT NULL,
    "harvestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weightKg" DECIMAL(8,2) NOT NULL,
    "pricePerKg" DECIMAL(12,2),
    "grade" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "harvest_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cultivation_cycles_deviceId_status_startedAt_idx" ON "cultivation_cycles"("deviceId", "status", "startedAt");

-- CreateIndex
CREATE INDEX "harvest_records_cycleId_harvestedAt_idx" ON "harvest_records"("cycleId", "harvestedAt");

-- AddForeignKey
ALTER TABLE "cultivation_cycles" ADD CONSTRAINT "cultivation_cycles_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "harvest_records" ADD CONSTRAINT "harvest_records_cycleId_fkey" FOREIGN KEY ("cycleId") REFERENCES "cultivation_cycles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
