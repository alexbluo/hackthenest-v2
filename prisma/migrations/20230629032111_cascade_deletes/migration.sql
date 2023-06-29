-- DropForeignKey
ALTER TABLE `HackerApp` DROP FOREIGN KEY `HackerApp_userEmail_fkey`;

-- DropForeignKey
ALTER TABLE `VolunteerApp` DROP FOREIGN KEY `VolunteerApp_userEmail_fkey`;

-- AddForeignKey
ALTER TABLE `HackerApp` ADD CONSTRAINT `HackerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VolunteerApp` ADD CONSTRAINT `VolunteerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;
