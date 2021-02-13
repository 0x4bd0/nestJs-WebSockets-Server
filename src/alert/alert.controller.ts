import { Body, Controller, Post } from '@nestjs/common';

@Controller('alert')
export class AlertController {

    @Post('')
    sendAllert(@Body : dto {msg:string}) : any {
        
    }
}
