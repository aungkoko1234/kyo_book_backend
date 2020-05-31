import { IsString, IsNotEmpty, IsNumber, IsEmpty } from 'class-validator';
export class CreateRestaurantDto {
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    address : string

    @IsString()
    @IsNotEmpty()
    typeId : string

    @IsString()
    @IsNotEmpty()
    url : string

    @IsNumber()
    @IsNotEmpty()
    capacity : number

    @IsNumber()
    @IsNotEmpty()
    session : number

    @IsNumber()
    @IsNotEmpty()
    latitude : number

    @IsNumber()
    @IsNotEmpty()
    longitude : number

}