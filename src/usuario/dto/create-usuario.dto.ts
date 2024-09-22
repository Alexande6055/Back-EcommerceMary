import { IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  uid: string;
  @IsString()
  email: string;
  @IsString() 
  password: string;
}
