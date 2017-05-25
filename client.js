  const readline = require('readline');
  var Mplayer = require('node-mplayer');
 const socketio = require('socket.io-client');
 const color = require("ansi-color").set;
const socket = socketio.connect('http://localhost:3636/');
const rl = readline.createInterface(process.stdin, process.stdout);
let nickname;
let defaultcolor='cyan';
const  player = new Mplayer('hadouken.mp4');







rl.question("Please enter a nickname:", (name) =>{

    let newcomer = ` is newcomer`;
      nickname = name;
    socket.emit('send', {  message: newcomer,nickname:nickname });


});


rl.on('line', (line) =>{

let spliter = line.split(':')

if(line[0]==='/'&&spliter[0]==='/chcolor'){
socket.emit('send', {  type:'chcolor', message:line, nickname: nickname });
}else if(line[0]==='/'&&spliter[0]==='/chnick'){
socket.emit('send', {  type:'chnick', message:line, nickname: nickname });
}else if(line[0]==='/'&&spliter[0]==='/clear'){
socket.emit('send', {  type:'clear', message:line, nickname: nickname });
}else if(line[0]==='/'&&spliter[0]==='/bear'){
socket.emit('send', {  type:'bear', message:line, nickname: nickname });
}else if(line[0]==='/'&&spliter[0]==='/hadouken'){
socket.emit('send', {  type:'hadouken', message:line, nickname: nickname });
}else{
socket.emit('send', {   message:line, nickname: nickname });
}

});





socket.on('message', (data) =>{





if(data.type=='chcolor'){


      defaultcolor  = data.message.split(':')[1].split(' ')[0];
          colornick = color( data.nickname, `${defaultcolor}`);
          console.log(`$${colornick}  ${data.message} `);
}else if(data.type=='chnick'){

nickname=data.message.split(':')[1].split(' ')[0];
colornick = color( data.nickname, `${defaultcolor}`);
console.log(`$${colornick}  ${data.message} `);

}else if(data.type=='clear'){

process.stdin.write('\u001b[2J\u001b[0;0H');
}else if(data.type=='bear'){

  console.log(
    `………………….._,,-~’’’¯¯¯’’~-,,
………………..,-‘’ ; ; ;_,,---,,_ ; ;’’-,…………………………….._,,,---,,_
……………….,’ ; ; ;,-‘ , , , , , ‘-, ; ;’-,,,,---~~’’’’’’~--,,,_…..,,-~’’ ; ; ; ;__;’-,
……………….| ; ; ;,’ , , , _,,-~’’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ¯’’~’-,,_ ,,-~’’ , , ‘, ;’,
……………….’, ; ; ‘-, ,-~’’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;’’-, , , , , ,’ ; |
…………………’, ; ;,’’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;’-, , ,-‘ ;,-‘
………………….,’-‘ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;’’-‘ ;,,-‘
………………..,’ ; ; ; ; ; ; ; ; ; ; ; ;__ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ‘-,’
………………,-‘ ; ; ; ; ; ; ; ; ; ;,-‘’¯: : ’’-, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; _ ; ; ; ; ;’,
……………..,’ ; ; ; ; ; ; ; ; ; ; ;| : : : : : :| ; ; ; ; ; ; ; ; ; ; ; ; ,-‘’¯: ¯’’-, ; ; ;’,
…………….,’ ; ; ; ; ; ; ; ; ; ; ; ‘-,_: : _,-‘ ; ; ; ; ; ; ; ; ; ; ; ; | : : : : : :| ; ; ; |
……………,’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ¯¯ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;’-,,_ : :,-‘ ; ; ; ;|
…………..,-‘ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ,,-~’’ , , , , ,,,-~~-, , , , _ ; ; ;¯¯ ; ; ; ; ;|
..…………,-‘ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,’ , , , , , , ,( : : : : :) , , , ,’’-, ; ; ; ; ; ; ; ;|
……….,-‘ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;’, , , , , , , , ,’~---~’’ , , , , , ,’ ; ; ; ; ; ; ; ;’,
…….,-‘’ ; _, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ‘’~-,,,,--~~’’’¯’’’~-,,_ , ,_,-‘ ; ; ; ; ; ; ; ; ; ‘,
….,-‘’-~’’,-‘ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; | ; ; | . . . . . . ,’; ,’’¯ ; ; ; ; ; ; ; ; ; ,_ ; ‘-,
……….,’ ; ;,-, ; ;, ; ; ;, ; ; ; ; ; ; ; ; ; ; ‘, ; ;’, . . . . .,’ ;,’ ; ; ; ;, ; ; ;,’-, ; ;,’ ‘’~--‘’’
………,’-~’ ,-‘-~’’ ‘, ,-‘ ‘, ,,- ; ; ; ; ; ; ; ; ‘, ; ; ‘~-,,,-‘’ ; ,’ ; ; ; ; ‘, ;,-‘’ ; ‘, ,-‘,
……….,-‘’ ; ; ; ; ; ‘’ ; ; ;’’ ; ; ; ; ; ; ; ; ; ; ‘’-,,_ ; ; ; _,-‘ ; ; ; ; ; ;’-‘’ ; ; ; ‘’ ; ;’-,
……..,-‘ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;¯¯’’¯ ; ; ; ; ; ; ; ; , ; ; ; ; ; ; ; ; ;’’-,
……,-‘ ; ; ; ; ; ; ; ,, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; |, ; ; ; ; ; ; ; ; ; ; ‘-,
…..,’ ; ; ; ; ; ; ; ;,’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;|..’-,_ ; ; ; , ; ; ; ; ; ‘,
….,’ ; ; ; ; ; ; ; ; | ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,’…….’’’,-~’ ; ; ; ; ; ,’
…,’ ; ; ; ; ; ; ; ; ;’~-,,,,,--~~’’’’’’~-,, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,’…..,-~’’ ; ; ; ; ; ; ,-
…| ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ‘, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,’…,-‘ ; ; ; ; ; ; ; ;,-‘
…’, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ,-‘ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ,’….’, ; ; ; ; _,,-‘’
….’, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ,-‘’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,’…….’’~~’’¯
…..’’-, ; ; ; ; ; ; ; ; ; ; ; ; ; ;_,,-‘’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ,-‘
………’’~-,,_ ; ; ; ; _,,,-~’’ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,-‘
………..| ; ; ;¯¯’’’’¯ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,,-‘
………..’, ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;,-‘
…………| ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;|
…………’, ; ; ; ; ; ; ; ; ; ~-,,___ ; ; ; ; ; ; ; ; ; ; ; ; ; ;’,
………….’, ; ; ; ; ; ; ; ; ; ; ;,-‘….’’-, ; ; ; ; ; ; ; ; ; ; ; ; ‘,
………..,’ ‘- ; ; ; ; ; ; ; ; ;,-‘’……….’-, ; ; ; ; ; ; ; ; ; ; ; ‘,
……….,’ ; ;’ ; ; ; ; ; ; ,,-‘…………….’, ; ; ; ; ; ; ; ; ; ; ;’,
………,’ ; ; ; ; ; ; ; ;,-‘’…………………’’-, ; ; ; ; ; ; ; ; ; |
……..,’ ; ; ; ; ; ; ;,,-‘………………………’’, ; ; ; ; ; ; ; ; |
……..| ; ; ; ; ; ; ;,’…………………………,’ ; ; ; ; ; ; ; ;,’
……..| ; ; ; ; ; ; ,’………………………..,-‘ ; ; ; ; ; ; ; ,’’
……..| ; ; ; ; ; ;,’……………………….,-‘ ; ; ; ; ; ; ; ,-‘
……..’,_ , ; , ;,’……………………….,’ ; ; ; ; ; ; ; ,-‘
………’,,’,¯,’,’’|……………………….| ; ; ; ; ; ; ; ; ‘--,,
………….¯…’’………………………..’-, ; ; ; ; ; ; ; ; ; ;’’~,,
……………………………………………’’-,, ; ; ; ; ; ; ; ; ; ;’’~-,,
………………………………………………..’’-, ; ; ; ; ; ,,_ ; ;’-,’’-,
…………………………………………………..’, ; ; ; ; ; ; ‘-,__,--.
……………………………………………………’-, ; ; ;,,-~’’’  , ,|, |
………………………………………………………’’~-‘’_ , , ,,’,_/--‘ `);

}else if(data.type=='hadouken'){
player.play({volume: 50});
}else{

colornick = color( data.nickname, `${defaultcolor}`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`$${colornick}  ${data.message} `);
    rl.prompt(true);

}

});
