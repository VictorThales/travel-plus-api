// place.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Place, Prisma } from '@prisma/client';

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  async createPlace(data: Prisma.PlaceCreateInput): Promise<Place> {
    return this.prisma.place.create({ data });
  }

  async getPlaces(): Promise<Place[]> {
    return this.prisma.place.findMany();
  }

  async getPlaceById(id: number): Promise<Place | null> {
    return this.prisma.place.findUnique({ where: { id } });
  }

  async getPlaceByTripId(tripId: number): Promise<Place[]> {
    return this.prisma.place.findMany({ 
      where: { 
        tripId,
      } 
    });
  }


  async updatePlace(params: {
    where: Prisma.PlaceWhereUniqueInput;
    data: Prisma.PlaceUpdateInput;
  }): Promise<Place> {
    const { where, data } = params;
    return this.prisma.place.update({ data, where });
  }

  async deletePlace(where: Prisma.PlaceWhereUniqueInput): Promise<Place> {
    return this.prisma.place.delete({ where });
  }
}