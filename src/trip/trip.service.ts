// trip.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Trip, Prisma } from '@prisma/client';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async getTotalSpentByUser(userId: number): Promise<number> {
    const trips = await this.prisma.trip.findMany({
      where: {
        userId: userId,
      },
      include: {
        places: true,
      },
    });
    let totalSpent = 0;

    trips.forEach((trip) => {
      trip.places.forEach((place) => {
        totalSpent += place.spent;
      });
    });

    return totalSpent;
  }

  async createTrip(data: Prisma.TripCreateInput): Promise<Trip> {
    return this.prisma.trip.create({ data });
  }

  async getTrips(): Promise<Trip[]> {
    return this.prisma.trip.findMany();
  }

  async getTripById(id: number): Promise<Trip | null> {
    return this.prisma.trip.findUnique({ where: { id } });
  }

  async getTripByUserId(id: number): Promise<Trip[] | null> {
    return this.prisma.trip.findMany({ where: { userId: id } });
  }

  async updateTrip(params: {
    where: Prisma.TripWhereUniqueInput;
    data: Prisma.TripUpdateInput;
  }): Promise<Trip> {
    const { where, data } = params;
    return this.prisma.trip.update({ data, where });
  }

  async deleteTrip(where: Prisma.TripWhereUniqueInput): Promise<Trip> {
    return this.prisma.trip.delete({ where });
  }
}
