  const readline = require('readline');
 const socketio = require('socket.io-client');
 const color = require("ansi-color").set;
const socket = socketio.connect('http://localhost:3636/');
const rl = readline.createInterface(process.stdin, process.stdout);
let nickname;
let defaultcolor='cyan';








rl.question("Please enter a nickname:", (name) =>{

    let newcomer = ` is newcomer`;
      nickname = name;
    socket.emit('send', {  message: newcomer,nickname:nickname });


});


rl.on('line', (line) =>{
let spliter = line.split(':')

if(line[0]==='/'&&spliter[0]==='/chcolor'){
socket.emit('send', {  type:'chcolor', message:line, nickname: nickname });
}else{
socket.emit('send', {   message:line, nickname: nickname });
}

});





socket.on('message', (data) =>{





if(data.type=='chcolor'){


      defaultcolor  = data.message.split(':')[1].split(' ')[0];
          colornick = color( data.nickname, `${defaultcolor}`);
          console.log(`:()${colornick}  ${data.message} `);
}

else{

colornick = color( data.nickname, `${defaultcolor}`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`:() ${colornick}  ${data.message} `);
    rl.prompt(true);

}

});
