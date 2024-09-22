import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FirebaseService } from '../firebase/firebase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario])],
  controllers: [AuthController],
  providers: [AuthService,FirebaseService],
})
export class AuthModule {}
