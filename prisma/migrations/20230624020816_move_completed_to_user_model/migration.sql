/*
  Warnings:

  - You are about to drop the column `complete` on the `HackerApp` table. All the data in the column will be lost.
  - You are about to drop the column `rsvp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `complete` on the `VolunteerApp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `HackerApp` DROP COLUMN `complete`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `rsvp`;

-- AlterTable
ALTER TABLE `VolunteerApp` DROP COLUMN `complete`;

-- CreateTable
CREATE TABLE `Completed` (
    `item` ENUM('HACKERAPP', 'VOLUNTEERAPP', 'RSVP') NOT NULL,
    `userEmail` VARCHAR(191) NULL,

    PRIMARY KEY (`item`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Completed` ADD CONSTRAINT `Completed_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;
