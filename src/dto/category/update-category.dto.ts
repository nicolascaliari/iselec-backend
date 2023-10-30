import {IsString, IsNumber, IsNotEmpty} from 'class-validator';

export class UpdateCategoryDto{
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    precio?: number;
}