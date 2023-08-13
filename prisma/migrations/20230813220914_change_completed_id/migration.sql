/*
  Warnings:

  - The primary key for the `Completed` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `A` on the `_CompletedToUser` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `DateTime(3)`.

*/
-- DropForeignKey
ALTER TABLE `_CompletedToUser` DROP FOREIGN KEY `_CompletedToUser_A_fkey`;

-- AlterTable
ALTER TABLE `Completed` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`time`);

-- AlterTable
ALTER TABLE `_CompletedToUser` MODIFY `A` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `_CompletedToUser` ADD CONSTRAINT `_CompletedToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Completed`(`time`) ON DELETE CASCADE ON UPDATE CASCADE;
