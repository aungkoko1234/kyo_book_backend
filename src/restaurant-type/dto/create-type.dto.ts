import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateTypeDto {
    @IsNotEmpty()
    @IsString()
    name : string
}