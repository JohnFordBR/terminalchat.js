'use strict';
const socketio = require('socket.io');
const io = socketio.listen(1515);

io.sockets.on('connection', (socket)=>{
console.log('connection');
    socket.on('send', (data) =>{
        io.sockets.emit('message', data);
    });

});
