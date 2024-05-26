// destination.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { Destination, Prisma } from '@prisma/client';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Post()
  async createDestination(@Body() data: Prisma.DestinationCreateInput): Promise<Destination> {
    return this.destinationService.createDestination(data);
  }

  @Get()
  async getDestinations(): Promise<Destination[]> {
    return this.destinationService.getDestinations();
  }

  @Get(':id')
  async getDestinationById(@Param('id') id: string): Promise<Destination | null> {
    return this.destinationService.getDestinationById(+id);
  }

  @Put(':id')
  async updateDestination(@Param('id') id: string, @Body() data: Prisma.DestinationUpdateInput): Promise<Destination> {
    return this.destinationService.updateDestination({ where: { id: +id }, data });
  }

  @Delete(':id')
  async deleteDestination(@Param('id') id: string): Promise<Destination> {
    const destination = await this.destinationService.getDestinationById(+id);
    if (!destination) {
      throw new HttpException('Destination not found', HttpStatus.NOT_FOUND);
    }
    return this.destinationService.deleteDestination({ id: +id });
  }
}