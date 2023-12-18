import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { category, categorySchema } from './schemas/category.schema';

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: category.name,
            schema: categorySchema
        }
    ])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule { }
