// companion.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CompanionService } from './companion.service';
import { Companion, Prisma} from '@prisma/client';

@Controller('companions')
export class CompanionController {
  constructor(private readonly companionService: CompanionService) {}

  @Post()
  async createCompanion(@Body() data: Prisma.CompanionCreateInput): Promise<Companion> {
    return this.companionService.createCompanion(data);
  }

  @Get()
  async getCompanions(): Promise<Companion[]> {
    return this.companionService.getCompanions();
  }

  @Get(':id')
  async getCompanionById(@Param('id') id: string): Promise<Companion | null> {
    return this.companionService.getCompanionById(+id);
  }

  @Put(':id')
  async updateCompanion(@Param('id') id: string, @Body() data: Prisma.CompanionUpdateInput): Promise<Companion> {
    return this.companionService.updateCompanion({ where: { id: +id }, data });
  }

  @Delete(':id')
  async deleteCompanion(@Param('id') id: string): Promise<Companion> {
    const companion = await this.companionService.getCompanionById(+id);
    if (!companion) {
      throw new HttpException('Companion not found', HttpStatus.NOT_FOUND);
    }
    return this.companionService.deleteCompanion({ id: +id });
  }
}