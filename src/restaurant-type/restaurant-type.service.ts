import { RestaurantType } from './../interfaces/restaurant-type.interface';
import { CreateTypeDto } from './dto/create-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantTypeService {
    constructor(@InjectModel('RestaurantType') private restaurntTypeModel: Model<RestaurantType>) {}

    async create(createTypeDto: CreateTypeDto): Promise<RestaurantType> {
      const createdType = new this.restaurntTypeModel(createTypeDto);
      return createdType.save();
    }
  
    async findAll(): Promise<RestaurantType[]> {
      return this.restaurntTypeModel.find().exec();
    }
}
