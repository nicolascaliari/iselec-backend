import { IsString , IsNumber, IsNotEmpty} from 'class-validator';

export class CreateCategoryDto {

    @IsNumber()
    @IsNotEmpty()
    idCategory : number;

    @IsString()
    @IsNotEmpty()
    name: string;
}