import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server } from 'http';
import { Socket } from 'socket.io'

@WebSocketGateway(4959,{namespace:'messages'})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  // this is used to send message to everyone 
  /* @WebSocketServer() wss : Server; */

  private logger: Logger = new Logger('AppGatewayLogger')

  handleDisconnect(client: any) {
    this.logger.log('socket gate way disconnected')

  }
  handleConnection(client: any, ...args: any[]) {
    this.logger.log('socket gate way connected')

  }

  afterInit(server: any) {
    this.logger.log('Web socker gateway init ...')
  }

  @SubscribeMessage('sendToServer')
  handleMessage(client: Socket, text: string): WsResponse<string> {
    // this is used to send message to everyone 
    /* this.wss.emit('sendToServer',text) */

    this.logger.log('recieved' + text)

    // THIS 
 /*   client.emit('sendToServer',text)  */
    // Equals this, Typed
    return { event : 'sendToClient', data : text }
  }

}
