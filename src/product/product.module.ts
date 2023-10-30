import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { product, productSchema } from 'src/schemas/product.schema';
@Module({
  imports: [MongooseModule.forFeature([
    {
      name: product.name,
      schema: productSchema
    }
  ])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
