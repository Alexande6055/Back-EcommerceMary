import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('auth')
@Controller('auth')
export class AuthController {


  constructor(private readonly authService: AuthService) {}

  @Post('verify')
  async verifyToken(@Body('token') token: string) {
    const user = await this.authService.validateUser(token);
    return user;
  }

}
