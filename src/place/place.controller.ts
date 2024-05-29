// place.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place, Prisma } from '@prisma/client';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  async createPlace(@Body() data: Prisma.PlaceCreateInput): Promise<Place> {
    return this.placeService.createPlace(data);
  }

  @Get()
  async getPlaces(): Promise<Place[]> {
    return this.placeService.getPlaces();
  }

  @Get(':id')
  async getPlaceById(@Param('id') id: string): Promise<Place | null> {
    return this.placeService.getPlaceById(+id);
  }

  @Get('/trip/:id')
  async getPlaceByTripId(@Param('id') id: string): Promise<Place[]> {
    return this.placeService.getPlaceByTripId(+id);
  }

  @Put(':id')
  async updatePlace(@Param('id') id: string, @Body() data: Prisma.PlaceUpdateInput): Promise<Place> {
    return this.placeService.updatePlace({ where: { id: +id }, data });
  }

  @Delete(':id')
  async deletePlace(@Param('id') id: string): Promise<Place> {
    const place = await this.placeService.getPlaceById(+id);
    if (!place) {
      throw new HttpException('Place not found', HttpStatus.NOT_FOUND);
    }
    return this.placeService.deletePlace({ id: +id });
  }
}