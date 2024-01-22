import { Injectable } from '@nestjs/common';
import { ProductModule } from './product.module';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/product/schemas/product.schema';
import { category } from 'src/category/schemas/category.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/product/dto/create-product.dto';


@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private Productmodel: Model<Product>,
        @InjectModel(category.name) private CategoryModel : Model<category>
        ) { }

    async findAll() {
        return this.Productmodel.find();
    }


    async findOne(id: string) {
        const products = await this.Productmodel.findById(id);
    
        console.log("product" + products)
        return products;
    }

    async findProductsByCategory(idCategory : string) {

        const category = await this.CategoryModel.findById(idCategory);

        const id = category._id;

       // console.log("productos x category" + idCategory)
        return await this.Productmodel.find({idCategory : id});
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
