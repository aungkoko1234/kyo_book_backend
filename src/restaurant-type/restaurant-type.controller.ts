import { CreateTypeDto } from './dto/create-type.dto';
import { RestaurantTypeService } from './restaurant-type.service';
import { ValidationPipe } from './../share/validation.pipe';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('restaurant-type')
export class RestaurantTypeController {
    constructor(private restaurnatTypeService: RestaurantTypeService) { }
    @Get()
    async GetAll() {
        return await this.restaurnatTypeService.findAll();
    }
    @Post()
    async create(@Body(new ValidationPipe()) createTypeDto : CreateTypeDto ){
     return this.restaurnatTypeService.create(createTypeDto);
    }
}
