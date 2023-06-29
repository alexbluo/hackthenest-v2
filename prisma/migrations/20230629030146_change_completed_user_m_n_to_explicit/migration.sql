/*
  Warnings:

  - You are about to drop the `_CompletedToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `HackerApp` DROP FOREIGN KEY `HackerApp_userEmail_fkey`;

-- DropForeignKey
ALTER TABLE `VolunteerApp` DROP FOREIGN KEY `VolunteerApp_userEmail_fkey`;

-- DropForeignKey
ALTER TABLE `_CompletedToUser` DROP FOREIGN KEY `_CompletedToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CompletedToUser` DROP FOREIGN KEY `_CompletedToUser_B_fkey`;

-- DropTable
DROP TABLE `_CompletedToUser`;

-- CreateTable
CREATE TABLE `CompletedOnUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userEmail` VARCHAR(191) NULL,
    `completedItem` ENUM('HACKERAPP', 'VOLUNTEERAPP', 'RSVP') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HackerApp` ADD CONSTRAINT `HackerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VolunteerApp` ADD CONSTRAINT `VolunteerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompletedOnUsers` ADD CONSTRAINT `CompletedOnUsers_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompletedOnUsers` ADD CONSTRAINT `CompletedOnUsers_completedItem_fkey` FOREIGN KEY (`completedItem`) REFERENCES `Completed`(`item`) ON DELETE CASCADE ON UPDATE CASCADE;
