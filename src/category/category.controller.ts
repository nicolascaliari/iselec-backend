import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/dto/category/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    async findAll(): Promise<any> {
        return this.categoryService.findAll();
    }


    @Get(':id')
    async findOne(@Param('id') id: number) {
        try {
            return await this.categoryService.findOne(id);
        }catch(err){
            console.error(err);
        }
      
    }

    @Post()
    async create(@Body() body: CreateCategoryDto) {
        try {
            return await this.categoryService.create(body);
        } catch (err) {
            console.error(err);
        }
    }


    @Delete(':id')
    async delete(@Param('id') id : number) {
        return await this.categoryService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: CreateCategoryDto) {
        return await this.categoryService.update(id, body);
    }

}