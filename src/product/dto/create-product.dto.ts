import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    idCategory: string;
    file?: Express.Multer.File;
}
