-- Device metadata
ALTER TABLE "devices"
ADD COLUMN "macAddress" TEXT,
ADD COLUMN "rssiDbm" INTEGER,
ADD COLUMN "uptimeMs" BIGINT;

-- Firmware registry
CREATE TABLE "firmwares" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "checksumSha256" TEXT NOT NULL,
    "hardwareVersion" TEXT NOT NULL DEFAULT '1.0',
    "changelog" TEXT,
    "isLatest" BOOLEAN NOT NULL DEFAULT false,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "firmwares_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "firmwares_version_key"
ON "firmwares"("version");

CREATE INDEX "firmwares_version_idx"
ON "firmwares"("version");

CREATE INDEX "firmwares_hardwareVersion_idx"
ON "firmwares"("hardwareVersion");

ALTER TABLE "firmwares"
ADD CONSTRAINT "firmwares_createdById_fkey"
FOREIGN KEY ("createdById") REFERENCES "users"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

-- OTA deployment logs
CREATE TABLE "ota_logs" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT,
    "deviceSerialNumber" TEXT,
    "firmwareId" TEXT,
    "firmwareVersion" TEXT NOT NULL,
    "firmwareUrl" TEXT NOT NULL,
    "checksumSha256" TEXT,
    "isBroadcast" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'SENT',
    "triggeredById" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ota_logs_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ota_logs_deviceId_idx"
ON "ota_logs"("deviceId");

CREATE INDEX "ota_logs_firmwareId_idx"
ON "ota_logs"("firmwareId");

CREATE INDEX "ota_logs_deviceSerialNumber_idx"
ON "ota_logs"("deviceSerialNumber");

ALTER TABLE "ota_logs"
ADD CONSTRAINT "ota_logs_deviceId_fkey"
FOREIGN KEY ("deviceId") REFERENCES "devices"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ota_logs"
ADD CONSTRAINT "ota_logs_firmwareId_fkey"
FOREIGN KEY ("firmwareId") REFERENCES "firmwares"("id")
ON DELETE SET NULL ON UPDATE CASCADE;