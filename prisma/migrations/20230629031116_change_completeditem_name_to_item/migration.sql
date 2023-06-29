/*
  Warnings:

  - You are about to drop the column `completedItem` on the `CompletedOnUsers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `CompletedOnUsers` DROP FOREIGN KEY `CompletedOnUsers_completedItem_fkey`;

-- AlterTable
ALTER TABLE `CompletedOnUsers` DROP COLUMN `completedItem`,
    ADD COLUMN `item` ENUM('HACKERAPP', 'VOLUNTEERAPP', 'RSVP') NULL;

-- AddForeignKey
ALTER TABLE `CompletedOnUsers` ADD CONSTRAINT `CompletedOnUsers_item_fkey` FOREIGN KEY (`item`) REFERENCES `Completed`(`item`) ON DELETE CASCADE ON UPDATE CASCADE;
