import { Module } from '@nestjs/common';
import { FireBaseService } from './service/fire-base.service';
import { FireBaseController } from './controller/fire-base.controller';

@Module({
  providers: [FireBaseService],
  controllers: [FireBaseController],
})
export class FireBaseModule {}
