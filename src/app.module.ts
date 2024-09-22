import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PersonasModule } from './personas/personas.module';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { FireBaseModule } from './fire-base/fire-base.module';

@Module({
  imports: [
    DatabaseModule,
    PersonasModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // Esta línea es opcional ya que '.env' es el valor predeterminado
    }),
    UsuarioModule,
    FireBaseModule,
  ],
})
export class AppModule {}
