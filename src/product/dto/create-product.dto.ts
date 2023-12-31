import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString() // Corregido a IsString
    @IsNotEmpty()
    color: string;

    @IsNumber()
    @IsNotEmpty()
    idCategory: number;

    file: Express.Multer.File;
}
