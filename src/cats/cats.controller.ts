import { CreateCatDto } from './dto/cats.dto';
import { ValidationPipe } from './../share/validation.pipe';
import { CatsService } from './cats.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }
    @Get()
    async GetAll() {
        return await this.catsService.findAll();
    }
    @Post()
    async create(@Body(new ValidationPipe()) createCatDto : CreateCatDto ){
     return this.catsService.create(createCatDto);
    }
}