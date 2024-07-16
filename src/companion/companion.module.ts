import { Module } from '@nestjs/common';
import { CompanionService } from './companion.service';
import { CompanionController } from './companion.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [CompanionService, PrismaService],
  controllers: [CompanionController]
})
export class CompanionModule {}
