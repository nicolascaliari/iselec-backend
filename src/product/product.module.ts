import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { product, productSchema } from 'src/product/schemas/product.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
@Module({
  imports:
    [CloudinaryModule, MongooseModule.forFeature([
      {
        name: product.name,
        schema: productSchema
      }
    ])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule { }
