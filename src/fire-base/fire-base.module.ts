import { Module } from '@nestjs/common';
import { FireBaseService } from './service/fire-base.service';
import { FireBaseController } from './controller/fire-base.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario])],
  providers: [FireBaseService],
  controllers: [FireBaseController],
})
export class FireBaseModule {}
