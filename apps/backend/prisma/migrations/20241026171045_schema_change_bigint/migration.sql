/*
  Warnings:

  - You are about to alter the column `ownerId` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `propertyId` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `renterId` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `pincode` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ownerId` on the `EmergencyDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `renterId` on the `EmergencyDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `phone1` on the `EmergencyDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `phone2` on the `EmergencyDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Owner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Owner` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `phone1` on the `Owner` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `phone2` on the `Owner` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Property` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ownerId` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Renter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Renter` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `renterPropertyId` on the `Renter` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `phone1` on the `Renter` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `phone2` on the `Renter` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `propertyId` on the `RoomDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_renterId_fkey";

-- DropForeignKey
ALTER TABLE "EmergencyDetails" DROP CONSTRAINT "EmergencyDetails_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "EmergencyDetails" DROP CONSTRAINT "EmergencyDetails_renterId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Renter" DROP CONSTRAINT "Renter_renterPropertyId_fkey";

-- DropForeignKey
ALTER TABLE "RoomDetails" DROP CONSTRAINT "RoomDetails_propertyId_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "ownerId" SET DATA TYPE INTEGER,
ALTER COLUMN "propertyId" SET DATA TYPE INTEGER,
ALTER COLUMN "renterId" SET DATA TYPE INTEGER,
ALTER COLUMN "pincode" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "EmergencyDetails" ALTER COLUMN "ownerId" SET DATA TYPE INTEGER,
ALTER COLUMN "renterId" SET DATA TYPE INTEGER,
ALTER COLUMN "phone1" SET DATA TYPE INTEGER,
ALTER COLUMN "phone2" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_pkey",
ALTER COLUMN "id" SET DATA TYPE INTEGER,
ALTER COLUMN "phone1" SET DATA TYPE INTEGER,
ALTER COLUMN "phone2" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Owner_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Property" DROP CONSTRAINT "Property_pkey",
ALTER COLUMN "id" SET DATA TYPE INTEGER,
ALTER COLUMN "ownerId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Property_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Renter" DROP CONSTRAINT "Renter_pkey",
ALTER COLUMN "id" SET DATA TYPE INTEGER,
ALTER COLUMN "renterPropertyId" SET DATA TYPE INTEGER,
ALTER COLUMN "phone1" SET DATA TYPE INTEGER,
ALTER COLUMN "phone2" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Renter_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RoomDetails" ALTER COLUMN "propertyId" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomDetails" ADD CONSTRAINT "RoomDetails_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Renter" ADD CONSTRAINT "Renter_renterPropertyId_fkey" FOREIGN KEY ("renterPropertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_renterId_fkey" FOREIGN KEY ("renterId") REFERENCES "Renter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyDetails" ADD CONSTRAINT "EmergencyDetails_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyDetails" ADD CONSTRAINT "EmergencyDetails_renterId_fkey" FOREIGN KEY ("renterId") REFERENCES "Renter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
