import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PersonasModule } from './personas/personas.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    DatabaseModule,
    PersonasModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // Esta línea es opcional ya que '.env' es el valor predeterminado
    }),
    UsuarioModule,
    AuthModule,
    FirebaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
