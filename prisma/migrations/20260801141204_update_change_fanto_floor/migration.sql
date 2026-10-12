/*
  Warnings:

  - The values [FAN] on the enum `ActuatorType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActuatorType_new" AS ENUM ('FLOOR', 'PUMP', 'MISTING', 'FLOOR_WATERING', 'LIGHT', 'OTHER');
ALTER TABLE "actuators" ALTER COLUMN "type" TYPE "ActuatorType_new" USING ("type"::text::"ActuatorType_new");
ALTER TYPE "ActuatorType" RENAME TO "ActuatorType_old";
ALTER TYPE "ActuatorType_new" RENAME TO "ActuatorType";
DROP TYPE "public"."ActuatorType_old";
COMMIT;
