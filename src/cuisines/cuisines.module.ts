import { CuisineSchema } from './../schemas/cuisine.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CuisinesController } from './cuisines.controller';
import { CuisinesService } from './cuisines.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cuisine', schema: CuisineSchema }])],
  controllers: [CuisinesController],
  providers: [CuisinesService]
})
export class CuisinesModule {}
