import { CreateCategoryDto } from './dto/create-category.dto';
import { ValidationPipe } from './../share/validation.pipe';
import { CategoriesService } from './categories.service';
import { Controller, Body, Post, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }
    @Get()
    async GetAll() {
        return await this.categoriesService.findAll();
    }
    @Post()
    async create(@Body(new ValidationPipe()) createCategoryDto : CreateCategoryDto ){
     return this.categoriesService.create(createCategoryDto);
    }
}
