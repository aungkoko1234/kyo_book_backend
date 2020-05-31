import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './../interfaces/menu.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class MenusService {
    constructor(@InjectModel('Menu') private menuModel: Model<Menu>) {}

    async create(createMenu: CreateMenuDto): Promise<Menu> {
      const createdMenu = new this.menuModel(createMenu);
      return createdMenu.save();
    }
  
    async findAll(): Promise<Menu[]> {
      return this.menuModel.find().exec();
    }
}
