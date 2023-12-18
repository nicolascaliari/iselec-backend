import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config'
import { ProductModule } from './product/product.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [ProductModule, ConfigModule.forRoot({ isGlobal: true }), CategoryModule, MongooseModule.forRoot('mongodb+srv://nicolascaliari28:iselec450@cluster0.xhcenwi.mongodb.net/iselec?retryWrites=true&w=majority'), CloudinaryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
