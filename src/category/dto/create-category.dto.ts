import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
    name: string;
    file: Express.Multer.File;



}
