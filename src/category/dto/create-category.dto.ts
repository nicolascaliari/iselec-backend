import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
    @IsNumber()
    @IsNotEmpty()
    idCategory: number;

    @IsString()
    @IsNotEmpty()
    name: string;
}
