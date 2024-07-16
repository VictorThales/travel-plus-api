-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "originalname" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "filepath" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
