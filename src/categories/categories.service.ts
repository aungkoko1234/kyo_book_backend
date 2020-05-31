import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './../interfaces/category.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel('Category') private categoryModel: Model<Category>) {}

    async create(createCategory: CreateCategoryDto): Promise<Category> {
      const createdCategory = new this.categoryModel(createCategory);
      return createdCategory.save();
    }
  
    async findAll(): Promise<Category[]> {
      return this.categoryModel.find().exec();
    }
}
