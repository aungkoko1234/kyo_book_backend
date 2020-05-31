import { SaveRestaurantDto } from './dto/save-restaurant.dto';
import { Restaurant } from './../interfaces/restaurant.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantsService {
    constructor(@InjectModel('Restaurant') private roleModel: Model<Restaurant>) {}

    async create(createResDto: SaveRestaurantDto): Promise<Restaurant> {
      const createdRes = new this.roleModel(createResDto);
      return createdRes.save();
    }
  
    async findAll(): Promise<Restaurant[]> {
      return this.roleModel.find().exec();
    }
}
