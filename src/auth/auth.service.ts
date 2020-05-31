import { CreateUserDto } from './../users/dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}
    
      async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
          const result = {
              _id :user._id,
              name : user.name,
              email : user.email,
              dob : user.dob,
              gender : user.gender,
              role : user.roleId.name
          }
          return result;
        }
        return null;
      }
    
      async login(user: any) {
        const payload = { username: user.name, sub: user._id,role:user.role};
        return {
          accessToken: this.jwtService.sign(payload),
        };
      }

      async register(createUserDto : CreateUserDto){
          const registeredUser = await this.usersService.create(createUserDto);
          const payload = {username: registeredUser.name,sub:registeredUser._id,role:registeredUser.roleId.name};
          console.log("payload after register",payload);
          const { password, ...result } = registeredUser;
          return {
              accessToken : this.jwtService.sign(payload),
              user : result
          }
      }
    }

