import { Controller, Get, Post, Delete, Put, Body, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

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
        } catch (err) {
            console.error(err);
        }

    }

    @Post('create')
    async create(@Body() body: CreateCategoryDto) {
        try {

            console.log(JSON.stringify(body));
            return await this.categoryService.create(body);
        } catch (err) {
            console.error(err);
        }
    }


    @Delete('delete')
    async delete(@Query('id') id: string) {
        return await this.categoryService.delete(id);
    }

    @Put('update')
    async update(@Query('id') id: string, @Body() body: UpdateCategoryDto) {
        return await this.categoryService.update(id, body);
    }

}