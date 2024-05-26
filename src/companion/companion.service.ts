// companion.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Companion, Prisma } from '@prisma/client';

@Injectable()
export class CompanionService {
  constructor(private prisma: PrismaService) {}

  async createCompanion(data: Prisma.CompanionCreateInput): Promise<Companion> {
    return this.prisma.companion.create({ data });
  }

  async getCompanions(): Promise<Companion[]> {
    return this.prisma.companion.findMany();
  }

  async getCompanionById(id: number): Promise<Companion | null> {
    return this.prisma.companion.findUnique({ where: { id } });
  }

  async updateCompanion(params: {
    where: Prisma.CompanionWhereUniqueInput;
    data: Prisma.CompanionUpdateInput;
  }): Promise<Companion> {
    const { where, data } = params;
    return this.prisma.companion.update({ data, where });
  }

  async deleteCompanion(where: Prisma.CompanionWhereUniqueInput): Promise<Companion> {
    return this.prisma.companion.delete({ where });
  }
}