import { Module } from '@nestjs/common';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [PlaceController],
  providers: [PlaceService, PrismaService]
})
export class PlaceModule {}
