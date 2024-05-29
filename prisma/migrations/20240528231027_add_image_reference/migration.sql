/*
  Warnings:

  - You are about to drop the column `images` on the `Companion` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Destination` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Place` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Companion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `Destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Companion" DROP COLUMN "images",
ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "images",
ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Place" DROP COLUMN "images",
ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Destination" ADD CONSTRAINT "Destination_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Companion" ADD CONSTRAINT "Companion_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
