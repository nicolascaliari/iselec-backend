import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

    findAll()
    {
        this.categoryModel.find();
    }


    create(createCategoryDto: any)
    {
        this.categoryModel.create(createCategoryDto);
    }


    async findOne(id: number)
    {
        return this.categoryModel.findById(id);
    }


    async delete(id: number)
    {
        return this.categoryModel.findByIdAndDelete(id);
    }


    async update(id: number, updateCategoryDto: any){
        return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
    }
}
