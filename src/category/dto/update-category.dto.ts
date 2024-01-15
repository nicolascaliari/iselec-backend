import {IsString, IsNumber, IsNotEmpty} from 'class-validator';

export class UpdateCategoryDto{
    name?: string;
    description?: string;
    precio?: number;
}