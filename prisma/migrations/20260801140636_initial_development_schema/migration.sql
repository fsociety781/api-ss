-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'FARMER');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('INVITED', 'ACTIVE', 'SUSPENDED', 'INACTIVE');

-- CreateEnum
CREATE TYPE "DeviceStatus" AS ENUM ('READY', 'ACTIVE', 'OFFLINE', 'SUSPENDED', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "OwnershipType" AS ENUM ('OWNED', 'RENTED', 'LEASED');

-- CreateEnum
CREATE TYPE "ControlMode" AS ENUM ('MANUAL', 'AUTO', 'HYBRID', 'SCHEDULE');

-- CreateEnum
CREATE TYPE "ActuatorType" AS ENUM ('FAN', 'PUMP', 'MISTING', 'FLOOR_WATERING', 'LIGHT', 'OTHER');

-- CreateEnum
CREATE TYPE "ActuatorState" AS ENUM ('ON', 'OFF', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "ControlAction" AS ENUM ('TURN_ON', 'TURN_OFF');

-- CreateEnum
CREATE TYPE "ControlSource" AS ENUM ('MOBILE_APP', 'WEB_DASHBOARD', 'AUTOMATION', 'SCHEDULE', 'DEVICE', 'TECHNICIAN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "fullName" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT,
    "passwordHash" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'FARMER',
    "status" "UserStatus" NOT NULL DEFAULT 'INVITED',
    "profileCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdById" TEXT,
    "activatedAt" TIMESTAMP(3),
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "activationCode" TEXT NOT NULL,
    "name" TEXT,
    "model" TEXT NOT NULL,
    "hardwareVersion" TEXT,
    "firmwareVersion" TEXT,
    "status" "DeviceStatus" NOT NULL DEFAULT 'READY',
    "ownershipType" "OwnershipType" NOT NULL DEFAULT 'RENTED',
    "controlMode" "ControlMode" NOT NULL DEFAULT 'MANUAL',
    "farmerId" TEXT,
    "createdById" TEXT,
    "activatedAt" TIMESTAMP(3),
    "lastSeenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_settings" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "minTemperature" DECIMAL(5,2),
    "maxTemperature" DECIMAL(5,2),
    "minHumidity" DECIMAL(5,2),
    "maxHumidity" DECIMAL(5,2),
    "timerDurationSeconds" INTEGER,
    "telemetryIntervalSec" INTEGER NOT NULL DEFAULT 60,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor_readings" (
    "id" BIGSERIAL NOT NULL,
    "deviceId" TEXT NOT NULL,
    "temperature" DECIMAL(5,2) NOT NULL,
    "humidity" DECIMAL(5,2) NOT NULL,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sensor_readings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actuators" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ActuatorType" NOT NULL,
    "channel" INTEGER NOT NULL,
    "state" "ActuatorState" NOT NULL DEFAULT 'OFF',
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "lastChangedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "actuators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "control_logs" (
    "id" BIGSERIAL NOT NULL,
    "deviceId" TEXT NOT NULL,
    "actuatorId" TEXT,
    "userId" TEXT,
    "action" "ControlAction" NOT NULL,
    "source" "ControlSource" NOT NULL,
    "mode" "ControlMode" NOT NULL,
    "success" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "executedAt" TIMESTAMP(3),

    CONSTRAINT "control_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "actuatorId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "action" "ControlAction" NOT NULL DEFAULT 'TURN_ON',
    "startMinute" INTEGER NOT NULL,
    "durationSeconds" INTEGER,
    "daysOfWeek" INTEGER[],
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneNumber_key" ON "users"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");

-- CreateIndex
CREATE INDEX "users_createdById_idx" ON "users"("createdById");

-- CreateIndex
CREATE UNIQUE INDEX "devices_serialNumber_key" ON "devices"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "devices_activationCode_key" ON "devices"("activationCode");

-- CreateIndex
CREATE INDEX "devices_farmerId_idx" ON "devices"("farmerId");

-- CreateIndex
CREATE INDEX "devices_createdById_idx" ON "devices"("createdById");

-- CreateIndex
CREATE INDEX "devices_status_idx" ON "devices"("status");

-- CreateIndex
CREATE UNIQUE INDEX "device_settings_deviceId_key" ON "device_settings"("deviceId");

-- CreateIndex
CREATE INDEX "sensor_readings_deviceId_recordedAt_idx" ON "sensor_readings"("deviceId", "recordedAt");

-- CreateIndex
CREATE INDEX "actuators_deviceId_idx" ON "actuators"("deviceId");

-- CreateIndex
CREATE UNIQUE INDEX "actuators_deviceId_channel_key" ON "actuators"("deviceId", "channel");

-- CreateIndex
CREATE INDEX "control_logs_deviceId_requestedAt_idx" ON "control_logs"("deviceId", "requestedAt");

-- CreateIndex
CREATE INDEX "control_logs_actuatorId_idx" ON "control_logs"("actuatorId");

-- CreateIndex
CREATE INDEX "control_logs_userId_idx" ON "control_logs"("userId");

-- CreateIndex
CREATE INDEX "schedules_deviceId_idx" ON "schedules"("deviceId");

-- CreateIndex
CREATE INDEX "schedules_actuatorId_idx" ON "schedules"("actuatorId");

-- CreateIndex
CREATE INDEX "schedules_createdById_idx" ON "schedules"("createdById");

-- CreateIndex
CREATE INDEX "schedules_isEnabled_idx" ON "schedules"("isEnabled");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_settings" ADD CONSTRAINT "device_settings_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensor_readings" ADD CONSTRAINT "sensor_readings_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actuators" ADD CONSTRAINT "actuators_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "control_logs" ADD CONSTRAINT "control_logs_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "control_logs" ADD CONSTRAINT "control_logs_actuatorId_fkey" FOREIGN KEY ("actuatorId") REFERENCES "actuators"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "control_logs" ADD CONSTRAINT "control_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_actuatorId_fkey" FOREIGN KEY ("actuatorId") REFERENCES "actuators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
