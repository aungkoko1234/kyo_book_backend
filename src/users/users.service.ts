import { CreateUserDto } from './dto/create-user.dto';
import { User } from './../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
      const createdUser = new this.userModel(createUserDto);
      const resultUser = await createdUser.save();
      return  this.userModel.findOne({name:resultUser.name}).populate('roleId');
      
    }
  
    async findAll(): Promise<User[]> {
      return this.userModel.find().populate('roleId').exec();
    }
    
    async findOne(username): Promise<User>{
        return this.userModel.findOne({name: username}).populate('roleId')
    }

}

