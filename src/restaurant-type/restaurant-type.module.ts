import { RestaurantTypeSchema } from './../schemas/restaurant-type.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { RestaurantTypeController } from './restaurant-type.controller';
import { RestaurantTypeService } from './restaurant-type.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'RestaurantType', schema: RestaurantTypeSchema }])],
  controllers: [RestaurantTypeController],
  providers: [RestaurantTypeService]
})
export class RestaurantTypeModule {}
