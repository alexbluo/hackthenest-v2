/*
  Warnings:

  - You are about to drop the `Diet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DietToHackerApp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DietToVolunteerApp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_DietToHackerApp` DROP FOREIGN KEY `_DietToHackerApp_A_fkey`;

-- DropForeignKey
ALTER TABLE `_DietToHackerApp` DROP FOREIGN KEY `_DietToHackerApp_B_fkey`;

-- DropForeignKey
ALTER TABLE `_DietToVolunteerApp` DROP FOREIGN KEY `_DietToVolunteerApp_A_fkey`;

-- DropForeignKey
ALTER TABLE `_DietToVolunteerApp` DROP FOREIGN KEY `_DietToVolunteerApp_B_fkey`;

-- AlterTable
ALTER TABLE `HackerApp` ADD COLUMN `diet` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `VolunteerApp` ADD COLUMN `diet` VARCHAR(191) NULL,
    MODIFY `firstName` VARCHAR(191) NULL,
    MODIFY `lastName` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `age` INTEGER NULL,
    MODIFY `role` VARCHAR(191) NULL,
    MODIFY `origin` VARCHAR(191) NULL,
    MODIFY `shirt` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Diet`;

-- DropTable
DROP TABLE `_DietToHackerApp`;

-- DropTable
DROP TABLE `_DietToVolunteerApp`;
