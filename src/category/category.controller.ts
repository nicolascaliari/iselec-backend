import { Controller, Get, Post, Delete, Put, Body, Param, Query, UseInterceptors, UploadedFile, ParseFilePipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService,
        private readonly cloudinaryService: CloudinaryService
    ) { }

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

    @Post('/create')
    @UseInterceptors(FileInterceptor('file'))
    async create(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                ],
            })
        ) file: Express.Multer.File,
        @Body() body: CreateCategoryDto) {
        try {

            const desiredFileName = body.name;
            const uploadedImage = await this.cloudinaryService.uploadFile(file, desiredFileName);

            body.file = uploadedImage.url;
            return await this.categoryService.create(body);
        } catch (err) {
            console.error(err);
        }
    }


    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        try {
            return await this.categoryService.delete(id);

        } catch (err) {
            console.error(err);
        }

    }

    @Put('/update/:id')
    async update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
        return await this.categoryService.update(id, body);
    }



    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                ],
            })
        ) file: Express.Multer.File
    ) {
        console.log(file)
        const desiredFileName = 'elpepe';
        return this.cloudinaryService.uploadFile(file, desiredFileName);
    }


}