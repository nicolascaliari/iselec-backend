import { Injectable } from '@nestjs/common';
import { ProductModule } from './product.module';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/product/schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/product/dto/create-product.dto';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private Productmodel: Model<Product>) { }

    async findAll() {
        return this.Productmodel.find();
    }


    async findOne(id: string) {
        return await this.Productmodel.findById(id);
    }

    async findProductsByCategory(idCategory : number) {

        console.log(idCategory)
        return await this.Productmodel.find({idCategory : idCategory});
    }


    async create(createProductDto: CreateProductDto) {
        const createdProduct = new this.Productmodel(createProductDto);
        return createdProduct.save();
    }


    delete(id : string) {
        return this.Productmodel.deleteOne({_id : id}).lean();
    }


    async update(id: string, createProductDto: CreateProductDto) {
        return await this.Productmodel.findByIdAndUpdate(id, createProductDto);
    }


}
