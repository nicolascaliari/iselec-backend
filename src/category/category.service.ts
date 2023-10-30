import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { category } from 'src/schemas/category.schema';
import { CreateCategoryDto } from 'src/dto/category/create-category.dto';
import { UpdateCategoryDto } from 'src/dto/category/update-category.dto'

@Injectable()
export class CategoryService {
    constructor(@InjectModel(category.name) private categoryModel: Model<category>) { }

    async findAll() {
        return this.categoryModel.find();
    }


    async create(createCategoryDto: CreateCategoryDto) {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }


    async findOne(id: number) {
        return this.categoryModel.findById(id);
    }


    async delete(id: number) {
        return this.categoryModel.findByIdAndDelete(id);
    }


    async update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
    }
}
