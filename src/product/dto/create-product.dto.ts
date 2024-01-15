import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {

    name: string;


    description: string;


    price: number;


    color: string;

    idCategory: number;

    file: Express.Multer.File;
}
