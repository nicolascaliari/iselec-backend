import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {

    id:string;
    name: string;
    description: string;
    price: number;
    idCategory: string;
    file?: Express.Multer.File;
}
