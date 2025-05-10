-- AlterTable
ALTER TABLE "User" ADD COLUMN     "howMuchTimeStudySystemDesign" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "seniorityLevel" TEXT NOT NULL DEFAULT 'mid-level',
ADD COLUMN     "unity" TEXT NOT NULL DEFAULT 'days',
ADD COLUMN     "workInIndustry" TEXT NOT NULL DEFAULT 'no',
ADD COLUMN     "yearsExperience" TEXT NOT NULL DEFAULT '0-2';
