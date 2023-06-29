/*
  Warnings:

  - You are about to drop the `CompletedOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `CompletedOnUsers` DROP FOREIGN KEY `CompletedOnUsers_item_fkey`;

-- DropForeignKey
ALTER TABLE `CompletedOnUsers` DROP FOREIGN KEY `CompletedOnUsers_userEmail_fkey`;

-- DropForeignKey
ALTER TABLE `HackerApp` DROP FOREIGN KEY `HackerApp_userEmail_fkey`;

-- DropForeignKey
ALTER TABLE `VolunteerApp` DROP FOREIGN KEY `VolunteerApp_userEmail_fkey`;

-- AlterTable
ALTER TABLE `Completed` ADD COLUMN `userEmail` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `CompletedOnUsers`;

-- AddForeignKey
ALTER TABLE `HackerApp` ADD CONSTRAINT `HackerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VolunteerApp` ADD CONSTRAINT `VolunteerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Completed` ADD CONSTRAINT `Completed_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;
