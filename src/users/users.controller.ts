import { CreateUserDto } from './dto/create-user.dto';
import { ValidationPipe } from './../share/validation.pipe';
import { UsersService } from './users.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get()
    async GetAll() {
        return await this.usersService.findAll();
    }
    @Post()
    async create(@Body(new ValidationPipe()) createUserDto : CreateUserDto ){
     return this.usersService.create(createUserDto);
    }
}
