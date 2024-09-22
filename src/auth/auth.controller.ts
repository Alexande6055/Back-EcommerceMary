import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {


  constructor(private readonly authService: AuthService) {}

  @Post('verify')
  async verifyToken(@Body('token') token: string) {
    console.log("Se llamo al metodo de la api");
    const user = await this.authService.validateUser(token);
    return user;
  }

}