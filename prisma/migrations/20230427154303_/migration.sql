-- CreateTable
CREATE TABLE `User` (
    `email` VARCHAR(191) NOT NULL,
    `qr` VARCHAR(191) NOT NULL,
    `rsvp` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_qr_key`(`qr`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HackerApp` (
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `yog` INTEGER NULL,
    `school` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `shirt` VARCHAR(191) NULL,
    `outreach` VARCHAR(191) NULL,
    `conduct` BOOLEAN NULL,
    `privacy` BOOLEAN NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userEmail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VolunteerApp` (
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `shirt` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userEmail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Diet` (
    `diet` VARCHAR(191) NOT NULL,
    `hackerAppUserEmail` VARCHAR(191) NOT NULL,
    `volunteerAppUserEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Diet_hackerAppUserEmail_key`(`hackerAppUserEmail`),
    UNIQUE INDEX `Diet_volunteerAppUserEmail_key`(`volunteerAppUserEmail`),
    PRIMARY KEY (`diet`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Check` (
    `check` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Check_userEmail_key`(`userEmail`),
    PRIMARY KEY (`check`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HackerApp` ADD CONSTRAINT `HackerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VolunteerApp` ADD CONSTRAINT `VolunteerApp_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diet` ADD CONSTRAINT `Diet_hackerAppUserEmail_fkey` FOREIGN KEY (`hackerAppUserEmail`) REFERENCES `HackerApp`(`userEmail`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Diet` ADD CONSTRAINT `Diet_volunteerAppUserEmail_fkey` FOREIGN KEY (`volunteerAppUserEmail`) REFERENCES `VolunteerApp`(`userEmail`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Check` ADD CONSTRAINT `Check_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
