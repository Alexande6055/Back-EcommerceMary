import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FireBaseService } from '../service/fire-base.service';

@ApiTags('auth')
@Controller('fire-base')
export class FireBaseController {
    
  constructor(private readonly firebaseService: FireBaseService) {}
  @Post('verify')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
      required: ['token'],
    },
  })
  async verifyToken(@Body('token') token: string) {
    console.log("se comienza la validacion del usuario")
    const user = await this.firebaseService.validateUser(token);
    console.log("Se termina la validacion del token del usuario se retorna el user  ")
    return user;
  }
}
