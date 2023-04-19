/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[check]` on the table `Check` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[diet]` on the table `Diet` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Check` DROP FOREIGN KEY `Check_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Diet` DROP FOREIGN KEY `Diet_hackerAppUserId_fkey`;

-- DropForeignKey
ALTER TABLE `Diet` DROP FOREIGN KEY `Diet_volunteerAppUserId_fkey`;

-- DropForeignKey
ALTER TABLE `HackerApp` DROP FOREIGN KEY `HackerApp_userId_fkey`;

-- DropForeignKey
ALTER TABLE `VolunteerApp` DROP FOREIGN KEY `VolunteerApp_userId_fkey`;

-- AlterTable
ALTER TABLE `Check` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Diet` MODIFY `hackerAppUserId` VARCHAR(191) NOT NULL,
    MODIFY `volunteerAppUserId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `HackerApp` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `VolunteerApp` MODIFY `userId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Check_check_key` ON `Check`(`check`);

-- CreateIndex
CREATE UNIQUE INDEX `Diet_diet_key` ON `Diet`(`diet`);

-- AddForeignKey
ALTER TABLE `HackerApp` ADD CONSTRAINT `HackerApp_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VolunteerApp` ADD CONSTRAINT `VolunteerApp_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diet` ADD CONSTRAINT `Diet_hackerAppUserId_fkey` FOREIGN KEY (`hackerAppUserId`) REFERENCES `HackerApp`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diet` ADD CONSTRAINT `Diet_volunteerAppUserId_fkey` FOREIGN KEY (`volunteerAppUserId`) REFERENCES `VolunteerApp`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Check` ADD CONSTRAINT `Check_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
