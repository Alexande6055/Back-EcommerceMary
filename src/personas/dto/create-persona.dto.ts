import { IsNumber, IsString } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  cedula: string;
  @IsString()
  nombre: string;
  @IsString()
  fecha_nacimiento: Date;
  @IsString()
  direccion: string;
  @IsString()
  foto: string;
  @IsString()
  celular: string;
  @IsNumber()
  id_usuario: number;
}
