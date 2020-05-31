import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name : string

    @IsEmail()
    @IsNotEmpty()
    email : string

    @IsString()
    @IsNotEmpty()
    dob : string 

    @IsString()
    @IsNotEmpty()
    password : string

    @IsString()
    @IsNotEmpty()
    gender : string 

    @IsString()
    @IsNotEmpty()
    roleId : string


}