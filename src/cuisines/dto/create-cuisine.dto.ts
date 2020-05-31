import { IsString, IsNotEmpty } from 'class-validator';
export class CreateCuisineDto {
    @IsString()
    @IsNotEmpty()
    name : string

}