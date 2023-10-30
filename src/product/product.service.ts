import { Injectable } from '@nestjs/common';
import { ProductModule } from './product.module';
import { InjectModel } from '@nestjs/mongoose';
import { product } from 'src/schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/product/create-product.dto';


@Injectable()
export class ProductService {
    constructor(@InjectModel(product.name) private Productmodel: Model<product>) { }

    async findAll() {
        return this.Productmodel.find();
    }


    async findOne(id: number) {
        return await this.Productmodel.findById(id);
    }


    async create(createProductDto: CreateProductDto) {
        const createdProduct = new this.Productmodel(createProductDto);
        return createdProduct.save();
    }


    async delete(id : number) {
        return await this.Productmodel.findByIdAndDelete(id);
    }


    async update(id: number, createProductDto: CreateProductDto) {
        return await this.Productmodel.findByIdAndUpdate(id, createProductDto);
    }


}
