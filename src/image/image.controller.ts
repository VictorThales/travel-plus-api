import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageService } from './image.service';
import { Image } from '@prisma/client';
import { Response } from 'express';
import { join } from 'path';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async uploadImage(@UploadedFile() file: Express.Multer.File): Promise<Image> {
    const { originalname, filename, path: filepath } = file;
    return this.imageService.saveImage(originalname, filename, filepath);
  }

  @Get(':id')
  async getImage(@Param('id') id: number, @Res() res: Response) {
    const image = await this.imageService.getImage(Number(id));
    return res.sendFile(join(process.cwd(), image.filepath));
  }
}