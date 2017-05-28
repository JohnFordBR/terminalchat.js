const net = require('net');
const JsonSocket= require('json-socket');
const HOST = '127.0.0.1';
const PORT = 6969;
let clients = [];



net.createServer((sock)=> {

clients.push(sock);

    sock.on('data', (data)=> {

      for(i of clients){
i.write(data);
      }
      
    });

}).listen(PORT, HOST);
