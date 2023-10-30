import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from 'src/dto/product/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async findAll() {
        this.productService.findAll();
    }


    @Post()
    async create(@Body() body: CreateProductDto) {
        try {
            return await this.productService.create(body);
        } catch (err) {
            console.error(err);
        }
    }



    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            return await this.productService.delete(id);
        } catch (err) {
            console.error(err);
        }
    }


    @Put(':id')
    async update(@Param('id') id: number, @Body() body: CreateProductDto) {
        try {
            return await this.productService.update(id, body);
        } catch (err) {
            console.error(err);
        }
    }
}
