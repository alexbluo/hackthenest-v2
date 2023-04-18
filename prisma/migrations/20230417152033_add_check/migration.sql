/*
  Warnings:

  - Added the required column `origin` to the `VolunteerApp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `VolunteerApp` ADD COLUMN `origin` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Check` (
    `check` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Check_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Check` ADD CONSTRAINT `Check_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
