import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';
import { AlertGateway } from './alert.gateway';
import { AlertController } from './alert/alert.controller';

@Module({
  imports: [],
  controllers: [AlertController],
  providers: [AppGateway, AlertGateway],
})
export class AppModule {}
