import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateMenuDto {
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    categoryId : string

    @IsString()
    @IsNotEmpty()
    createdBy : string

}