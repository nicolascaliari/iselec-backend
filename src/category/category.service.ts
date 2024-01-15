import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { category } from 'src/category/schemas/category.schema';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/category/dto/update-category.dto'

@Injectable()
export class CategoryService {
    constructor(@InjectModel(category.name) private categoryModel: Model<category>) { }

    async findAll() {
        return this.categoryModel.find().exec();
    }


    async create(createCategoryDto: CreateCategoryDto) {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }


    async findOne(id: number) {
        return this.categoryModel.findById(id);
    }


    async delete(id: string) {
        return this.categoryModel.deleteOne({ _id: id }).lean();
    }


    async update(id: string, updateCategoryDto: UpdateCategoryDto) {
        return this.categoryModel.updateOne({ _id: id }, updateCategoryDto);
    }
}
