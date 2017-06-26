import { TestBed, inject, async, tick } from '@angular/core/testing';
import { SocketIO, Server } from 'mock-socket';
import { SocketDemoService } from './socket-demo.service';

let mockServer;

describe('SocketDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketDemoService]
    });
  });

  beforeEach(() => {
    mockServer = new Server('http://localhost:8080');
    mockServer.on('connection', server => {
      mockServer.emit('chat-message', 'test message 1');
      mockServer.emit('chat-message', 'test message 2');
    });
  });

  it('should be created', async(inject([SocketDemoService], (service: SocketDemoService) => {

    (window as any).io = SocketIO;

    service.setup();
    setTimeout(() => {
      console.log('here')
      expect(service.messages.length).toEqual(2);
      mockServer.stop();
    }, 100);
  })));
});
