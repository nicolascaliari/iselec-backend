import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  const corsOptions: CorsOptions = {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  };

  app.enableCors(corsOptions);

  app.useGlobalPipes(new ValidationPipe());


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));




  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}

bootstrap();
