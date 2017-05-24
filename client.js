  const readline = require('readline');
 const socketio = require('socket.io-client');
 const color = require("ansi-color").set;
const socket = socketio.connect('http://localhost:3636/');
const rl = readline.createInterface(process.stdin, process.stdout);
let nickname;









rl.question("Please enter a nickname:", (name) =>{

    let newcomer = ` is newcomer`;
      nickname = name;
    socket.emit('send', {  message: newcomer,nickname:nickname });


});


rl.on('line', (line) =>{
process.stdout.clearLine();
socket.emit('send', {  message:line, nickname: nickname });


});



socket.on('message', (data) =>{


    let colornick;
    colornick = color( data.nickname, "cyan");
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`:()${colornick}  ${data.message} `);
    rl.prompt(true);


});
