/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Completed` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Completed` DROP FOREIGN KEY `Completed_userEmail_fkey`;

-- AlterTable
ALTER TABLE `Completed` DROP COLUMN `userEmail`;

-- CreateTable
CREATE TABLE `_CompletedToUser` (
    `A` ENUM('HACKERAPP', 'VOLUNTEERAPP', 'RSVP') NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CompletedToUser_AB_unique`(`A`, `B`),
    INDEX `_CompletedToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CompletedToUser` ADD CONSTRAINT `_CompletedToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Completed`(`item`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CompletedToUser` ADD CONSTRAINT `_CompletedToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
