-- DropForeignKey
ALTER TABLE "Companion" DROP CONSTRAINT "Companion_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Companion" DROP CONSTRAINT "Companion_tripId_fkey";

-- DropForeignKey
ALTER TABLE "Destination" DROP CONSTRAINT "Destination_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Destination" DROP CONSTRAINT "Destination_tripId_fkey";

-- DropForeignKey
ALTER TABLE "Place" DROP CONSTRAINT "Place_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Place" DROP CONSTRAINT "Place_tripId_fkey";

-- AlterTable
ALTER TABLE "Companion" ALTER COLUMN "imageId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Destination" ALTER COLUMN "imageId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Place" ALTER COLUMN "imageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Destination" ADD CONSTRAINT "Destination_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Destination" ADD CONSTRAINT "Destination_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Companion" ADD CONSTRAINT "Companion_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Companion" ADD CONSTRAINT "Companion_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
