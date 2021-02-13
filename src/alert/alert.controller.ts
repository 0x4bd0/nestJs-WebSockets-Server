import { Body, Controller, Post } from '@nestjs/common';
import { AlertGateway } from 'src/alert.gateway';

@Controller('alert')
export class AlertController {

    constructor(private alertGateWay : AlertGateway){}

    @Post('')
    sendAllert(@Body()  dto : {msg:string}) : string {

        this.alertGateWay.sendToAll(dto.msg)

        return 'Message send successfully'
    
    }
}
