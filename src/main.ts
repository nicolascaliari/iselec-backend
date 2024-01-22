import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


const bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: "http://iselec-backend-production.up.railway.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });

  // Configurar el body-parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Agregar el Validación Global
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}

bootstrap();
