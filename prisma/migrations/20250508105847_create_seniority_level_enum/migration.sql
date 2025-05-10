/*
  Warnings:

  - The `seniorityLevel` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SeniorityLevel" AS ENUM ('JUNIOR', 'MIDLEVEL', 'SENIOR', 'STAFF');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "seniorityLevel",
ADD COLUMN     "seniorityLevel" "SeniorityLevel" NOT NULL DEFAULT 'MIDLEVEL';
