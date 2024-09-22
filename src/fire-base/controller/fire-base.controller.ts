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
    const user = await this.firebaseService.validateUser(token);
    return user;
  }
}
