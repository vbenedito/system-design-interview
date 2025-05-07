/*
  Warnings:

  - You are about to drop the column `url` on the `Challenge` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Challenge" DROP COLUMN "url",
ADD COLUMN     "slug" TEXT NOT NULL DEFAULT 'https://example.com';
