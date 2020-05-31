import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { ValidationPipe } from './../share/validation.pipe';
import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private restaurantService: RestaurantsService) { }
    @UseGuards(JwtAuthGuard)
    @Get()
    async GetAll() {
        return await this.restaurantService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Request() req,@Body(new ValidationPipe()) createResDto : CreateRestaurantDto ){
      console.log("user",req.user);
      const newRestaurant = {
            name : createResDto.name,
            address : createResDto.address,
            capacity : createResDto.capacity,
            url : createResDto.url,
            session : createResDto.session,
            typeId : createResDto.typeId,
            createdBy : req.user.userId,
            location : {
                type : 'Point',
                coordinates :[createResDto.latitude,createResDto.longitude]
            }

      }
     return this.restaurantService.create(newRestaurant);
    }
}
