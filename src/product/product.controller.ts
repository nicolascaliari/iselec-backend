import { Body, Controller, Delete, Get, Param, ParseFilePipe, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService,
        private readonly cloudinaryService: CloudinaryService
    ) { }

    @Get()
    async findAll() {
        return this.productService.findAll();
    }

    @Post('/create')
    @UseInterceptors(FileInterceptor('file'))
    async createProductWithImage(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                ],
            })
        ) file: Express.Multer.File,
        @Body() body: CreateProductDto
    ) {
        try {
            const desiredFileName = body.name;
            const uploadedImage = await this.cloudinaryService.uploadFile(file, desiredFileName);

            body.file = uploadedImage.url;
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

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    // Your file validators here
                ],
            })
        ) file: Express.Multer.File
    ) {
        const desiredFileName = 'elpepe';
        return this.cloudinaryService.uploadFile(file, desiredFileName);
    }

    @Get('getImageUrl')
    async getImageUrlByPublicId(@Query('publicId') publicId: string) {
        const imageUrl = this.cloudinaryService.getImageUrlByPublicId(publicId);
        return { imageUrl };
    }
}
