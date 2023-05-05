/*
  Warnings:

  - You are about to alter the column `experience` on the `HackerApp` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `HackerApp` MODIFY `experience` INTEGER NULL;
