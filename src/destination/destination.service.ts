// destination.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Destination, Prisma } from '@prisma/client';

@Injectable()
export class DestinationService {
  constructor(private prisma: PrismaService) {}

  async createDestination(data: Prisma.DestinationCreateInput): Promise<Destination> {
    return this.prisma.destination.create({ data });
  }

  async getDestinations(): Promise<Destination[]> {
    return this.prisma.destination.findMany();
  }

  async getDestinationById(id: number): Promise<Destination | null> {
    return this.prisma.destination.findUnique({ where: { id } });
  }

  async getDestinationByTripId(tripId: number): Promise<Destination[]> {
    return this.prisma.destination.findMany({ 
      where: { 
        tripId,
      } 
    });
  }

  async updateDestination(params: {
    where: Prisma.DestinationWhereUniqueInput;
    data: Prisma.DestinationUpdateInput;
  }): Promise<Destination> {
    const { where, data } = params;
    return this.prisma.destination.update({ data, where });
  }

  async deleteDestination(where: Prisma.DestinationWhereUniqueInput): Promise<Destination> {
    return this.prisma.destination.delete({ where });
  }
}