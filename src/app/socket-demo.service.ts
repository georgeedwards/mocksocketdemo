import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketDemoService {
  socket: io.Socket;
  messages: Array<string>;
  constructor() {
    this.messages = [];
  }

  setup() {
    this.socket = io.connect('http://localhost:8080');
    this.socket.on('chat-message', data => {
      this.messages.push(data);
    });
  }

}
