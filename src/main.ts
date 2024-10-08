import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración básica de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Facturas')
    .setDescription('API para gestionar facturas y detalles relacionados')
    .setVersion('1.0')
    .addTag('MaryTT')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Arrancar la aplicación
  await app.listen(3000);
}

bootstrap();
