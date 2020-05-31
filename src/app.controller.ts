import { CreateUserDto } from './users/dto/create-user.dto';
import { ValidationPipe } from './share/validation.pipe';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Controller, Get, UseGuards, Post, Request, Body } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async create(@Body(new ValidationPipe()) createUserDto : CreateUserDto ){
    return this.authService.register(createUserDto);
   }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {;
    return req.user;
  }
}