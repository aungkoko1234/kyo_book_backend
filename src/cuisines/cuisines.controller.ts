import { ValidationPipe } from './../share/validation.pipe';
import { CuisinesService } from './cuisines.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCuisineDto } from './dto/create-cuisine.dto';

@Controller('cuisines')
export class CuisinesController {
    constructor(private cuisineService: CuisinesService) { }
    @Get()
    async GetAll() {
        return await this.cuisineService.findAll();
    }
    @Post()
    async create(@Body(new ValidationPipe()) createCuisineDto : CreateCuisineDto ){
     return this.cuisineService.create(createCuisineDto);
    }
}
