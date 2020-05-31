import { CreateRoleDto } from './dto/create-role.dto';
import { ValidationPipe } from './../share/validation.pipe';
import { RolesService } from './roles.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) { }
    @Get()
    async GetAll() {
        return await this.rolesService.findAll();
    }
    @Post()
    async create(@Body(new ValidationPipe()) CreateRoleDto : CreateRoleDto ){
     return this.rolesService.create(CreateRoleDto);
    }
}
