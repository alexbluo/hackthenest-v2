/*
  Warnings:

  - You are about to drop the column `diet` on the `HackerApp` table. All the data in the column will be lost.
  - You are about to drop the column `diet` on the `VolunteerApp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `HackerApp` DROP COLUMN `diet`;

-- AlterTable
ALTER TABLE `User` MODIFY `rsvp` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `VolunteerApp` DROP COLUMN `diet`;

-- CreateTable
CREATE TABLE `Diet` (
    `diet` VARCHAR(191) NOT NULL,
    `hackerAppUserId` INTEGER NOT NULL,
    `volunteerAppUserId` INTEGER NOT NULL,

    UNIQUE INDEX `Diet_hackerAppUserId_key`(`hackerAppUserId`),
    UNIQUE INDEX `Diet_volunteerAppUserId_key`(`volunteerAppUserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Diet` ADD CONSTRAINT `Diet_hackerAppUserId_fkey` FOREIGN KEY (`hackerAppUserId`) REFERENCES `HackerApp`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diet` ADD CONSTRAINT `Diet_volunteerAppUserId_fkey` FOREIGN KEY (`volunteerAppUserId`) REFERENCES `VolunteerApp`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
