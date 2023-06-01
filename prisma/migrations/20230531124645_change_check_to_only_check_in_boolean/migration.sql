/*
  Warnings:

  - You are about to drop the `Check` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Check` DROP FOREIGN KEY `Check_userEmail_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `check` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `Check`;
