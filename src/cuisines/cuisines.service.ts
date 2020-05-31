import { Cuisine } from './../interfaces/cuisine.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCuisineDto } from './dto/create-cuisine.dto';

@Injectable()
export class CuisinesService {
    constructor(@InjectModel('Cuisine') private cuisineModel: Model<Cuisine>) {}

    async create(createCuisineDto: CreateCuisineDto): Promise<Cuisine> {
      const createdCuisine = new this.cuisineModel(createCuisineDto);
      return createdCuisine.save();
    }
  
    async findAll(): Promise<Cuisine[]> {
      return this.cuisineModel.find().exec();
    }
}

