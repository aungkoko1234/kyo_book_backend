import { Cat } from './../interfaces/cat.interface';
import { CreateCatDto } from './dto/cats.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
      const createdCat = new this.catModel(createCatDto);
      return createdCat.save();
    }
  
    async findAll(): Promise<Cat[]> {
      return this.catModel.find().exec();
    }
}
