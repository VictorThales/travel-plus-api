import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Image } from '@prisma/client';

@Injectable()
export class ImageService {
  constructor(private readonly prisma: PrismaService) {}

  async saveImage(originalname: string, filename: string, filepath: string): Promise<Image> {
    return this.prisma.image.create({
      data: {
        originalname,
        filename,
        filepath,
      },
    });
  }

  async getImage(id: number): Promise<Image> {
    return this.prisma.image.findUnique({
      where: { id },
    });
  }
}