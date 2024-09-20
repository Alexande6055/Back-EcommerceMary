import { IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  email: string;
  @IsString() 
  password: string;
}
