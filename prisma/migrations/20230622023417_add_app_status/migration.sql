/*
  Warnings:

  - You are about to drop the column `origin` on the `VolunteerApp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `HackerApp` ADD COLUMN `complete` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `VolunteerApp` DROP COLUMN `origin`,
    ADD COLUMN `affiliation` VARCHAR(191) NULL,
    ADD COLUMN `complete` BOOLEAN NULL DEFAULT false;
