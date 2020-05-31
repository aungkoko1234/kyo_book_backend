import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './../interfaces/role.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class RolesService {
    constructor(@InjectModel('Role') private roleModel: Model<Role>) {}

    async create(createCatDto: CreateRoleDto): Promise<Role> {
      const createdCat = new this.roleModel(createCatDto);
      return createdCat.save();
    }
  
    async findAll(): Promise<Role[]> {
      return this.roleModel.find().exec();
    }
}
