/*
  Warnings:

  - You are about to drop the column `hackerAppUserEmail` on the `Diet` table. All the data in the column will be lost.
  - You are about to drop the column `volunteerAppUserEmail` on the `Diet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Diet` DROP FOREIGN KEY `Diet_hackerAppUserEmail_fkey`;

-- DropForeignKey
ALTER TABLE `Diet` DROP FOREIGN KEY `Diet_volunteerAppUserEmail_fkey`;

-- AlterTable
ALTER TABLE `Diet` DROP COLUMN `hackerAppUserEmail`,
    DROP COLUMN `volunteerAppUserEmail`;

-- CreateTable
CREATE TABLE `_DietToHackerApp` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DietToHackerApp_AB_unique`(`A`, `B`),
    INDEX `_DietToHackerApp_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DietToVolunteerApp` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DietToVolunteerApp_AB_unique`(`A`, `B`),
    INDEX `_DietToVolunteerApp_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_DietToHackerApp` ADD CONSTRAINT `_DietToHackerApp_A_fkey` FOREIGN KEY (`A`) REFERENCES `Diet`(`diet`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DietToHackerApp` ADD CONSTRAINT `_DietToHackerApp_B_fkey` FOREIGN KEY (`B`) REFERENCES `HackerApp`(`userEmail`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DietToVolunteerApp` ADD CONSTRAINT `_DietToVolunteerApp_A_fkey` FOREIGN KEY (`A`) REFERENCES `Diet`(`diet`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DietToVolunteerApp` ADD CONSTRAINT `_DietToVolunteerApp_B_fkey` FOREIGN KEY (`B`) REFERENCES `VolunteerApp`(`userEmail`) ON DELETE CASCADE ON UPDATE CASCADE;
