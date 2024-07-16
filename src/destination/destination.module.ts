import { Module } from '@nestjs/common';
import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [DestinationController],
  providers: [DestinationService, PrismaService]
})
export class DestinationModule {}
