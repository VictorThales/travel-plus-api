import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TripModule } from './trip/trip.module';
import { DestinationModule } from './destination/destination.module';
import { CompanionModule } from './companion/companion.module';
import { PlaceModule } from './place/place.module';


@Module({
  imports: [UserModule, TripModule, DestinationModule, CompanionModule, PlaceModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
