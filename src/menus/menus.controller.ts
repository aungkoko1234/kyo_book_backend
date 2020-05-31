import { CreateMenuDto } from './dto/create-menu.dto';
import { ValidationPipe } from './../share/validation.pipe';
import { MenusService } from './menus.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('menus')
export class MenusController {
    constructor(private menuService: MenusService) { }
    @Get()
    async GetAll() {
        return await this.menuService.findAll();
    }
    @Post()
    async create(@Body(new ValidationPipe()) createMenuDto : CreateMenuDto ){
     return this.menuService.create(createMenuDto);
    }
}
