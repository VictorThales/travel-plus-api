import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip } from '@prisma/client';

@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  async createTrip(@Body() data: { name: string; description: string; budget: number; }): Promise<Trip> {
    return this.tripService.createTrip(data);
  }

  @Get()
  async getTrips(): Promise<Trip[]> {
    return this.tripService.getTrips();
  }

  @Get(':id')
  async getTripById(@Param('id') id: string): Promise<Trip | null> {
    return this.tripService.getTripById(+id);
  }

  @Put(':id')
  async updateTrip(@Param('id') id: string, @Body() data: { name?: string; description?: string; budget?: number;}): Promise<Trip> {
    return this.tripService.updateTrip({ where: { id: +id }, data });
  }

  @Delete(':id')
  async deleteTrip(@Param('id') id: string): Promise<Trip> {
    const trip = await this.tripService.getTripById(+id);
    if (!trip) {
      throw new HttpException('Trip not found', HttpStatus.NOT_FOUND);
    }
    return this.tripService.deleteTrip({ id: +id });
  }
}