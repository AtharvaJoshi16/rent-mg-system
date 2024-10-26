/*
  Warnings:

  - The values [SUPERUSER,OWNER,RENTER] on the enum `UserType` will be removed. If these variants are still used in the database, this will fail.
  - The `preferredLanguage` column on the `Owner` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserType_new" AS ENUM ('superuser', 'owner', 'renter');
ALTER TABLE "Owner" ALTER COLUMN "userType" TYPE "UserType_new" USING ("userType"::text::"UserType_new");
ALTER TABLE "Renter" ALTER COLUMN "userType" TYPE "UserType_new" USING ("userType"::text::"UserType_new");
ALTER TYPE "UserType" RENAME TO "UserType_old";
ALTER TYPE "UserType_new" RENAME TO "UserType";
DROP TYPE "UserType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Owner" ALTER COLUMN "isVerified" DROP NOT NULL,
DROP COLUMN "preferredLanguage",
ADD COLUMN     "preferredLanguage" TEXT;

-- DropEnum
DROP TYPE "PreferredLanguage";
