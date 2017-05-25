  const readline = require('readline');
  var Mplayer = require('node-mplayer');
 const socketio = require('socket.io-client');
 const color = require("ansi-color").set;
const socket = socketio.connect('http://localhost:3636/');
const rl = readline.createInterface(process.stdin, process.stdout);
let nickname;
let defaultcolor='cyan';
const  player1 = new Mplayer('hadouken.mp4');

rl.setPrompt('$');
rl.question("Please enter a color:", (color) =>{
      defaultcolor = color
      rl.prompt(true);

      rl.question("Please enter a nickname:", (name) =>{

          let newcomer = ` is newcomer`;
            nickname = name;
          socket.emit('send', {  message: newcomer,nickname:nickname,color:defaultcolor });


      });
});





rl.on('line', (line) =>{

let spliter = line.split(':')

if(line[0]==='/'&&spliter[0]==='/chcolor'){
defaultcolor=line.split(':')[1].split(' ')[0];
socket.emit('send',{message:line,nickname:nickname,color:defaultcolor})
rl.prompt(true);
}else if(line[0]==='/'&&spliter[0]==='/chnick'){
nickname=line.split(':')[1].split(' ')[0];
socket.emit('send',{message:line,nickname:nickname,color:defaultcolor})
rl.prompt(true);
}else if(line[0]==='/'&&spliter[0]==='/clear'){
process.stdin.write('\u001b[2J\u001b[0;0H');
rl.prompt(true);
}else if(line[0]==='/'&&spliter[0]==='/bear'){
socket.emit('send', {  type:'bear', message:line, nickname: nickname });
}else if(line[0]==='/'&&spliter[0]==='/hadouken'){
socket.emit('send', {  type:'hadouken', message:line, nickname: nickname });
}else if (line[0]==='/'&&spliter[0]==='/shrug'){
  socket.emit('send', {  type:'shrug', message:line, nickname: nickname });
}else if(line[0]==='/'&&spliter[0]==='/fry'){
socket.emit('send', {  type:'fry', message:line, nickname: nickname });
}else if(line[0]==='/'&&spliter[0]==='/bean'){
socket.emit('send', {  type:'bean', message:line, nickname: nickname });
}else{
socket.emit('send', {   message:line, nickname: nickname,color:defaultcolor });
}

});





socket.on('message', (data) =>{


 if(data.type=='bear'){

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
rl.prompt(true);
}else if(data.type=='hadouken'){
player1.play({volume: 50});
}else if(data.type=='shrug'){
  console.log(`¯\_(ツ)_/¯`);
  rl.prompt(true);
}else if(data.type==='fry'){
  console.log(`

                 7O
          @     GGG
         7R   CQGGQ
        SGR  GGGGGQ
       7GGR #GGGGGQ      3GGGGGGS    SGC
       RGGRRGGGGGGQ  7GGGGGGGGGGGG#(GGG(
       QGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
       GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGQGGGO
       GGGGGGGGGGGGGGGGGGGGGGQRGGGGGGGGGGG
       GGGGGGGGGGGGGGGGGQRS///QGGGGGGGGGGR
       GGGGGGGGGGGGGGQS(///^3QGGGGGGGGGGQ(
       GGGGGGGGGGGQ3(//////SGGQS3GGGGGGGGQ
       RGGGGGGGQ(//^///////RS(//RGGGGGGGGGt
          (((O /^^/^^^//^/////3RGGGGGGGGGGGC
            C///^/^^/^//^^^//^RGGGGGGGGGGGG7
           (7^//^/^^//((////^/QGGGGGGGGGGGQ(
           7R^ ^(S73/^   S//^^QGGRGGGGGGGGC
          O7     O3       (^/^GGQ3((QGGGGR
          S  OR(SO     /@  ///RR733S3QQ/
          #t  7S^O(       /^^/(////OO(
           7QCS^//(^     C3///////(/S
          O/^///////(OO33/////^/(7O#O
          C^^^^^/^/^^^^/^^/^^^^//(@RRR
           #(((/^^^^^^^^/^/^/^////RRBB@@C
          S(^/^^^//^^//^^////////^@RB@RRR@
         3^/^^/^//^^^^/^/^//^////(@RBBBB@BBO
        7/^^//^^//^/((OOSOO#(^///7@BBB@@@@BBC
          (3O3773SO//^/////^((///RBBB@B@@@BBR@t
                7RB@RO/^///^^////@BBB@@@@@@@BB@C
                BB@BBB#//^///////RB@B@@@@@@@B@BB#
                RB@BR@R@/^////^/RBB@@@@@@@@@B@@@BR
               ^B@@BB@@@Q///^//#B@@@@@@@@@@@@@@BBBO
               /@@@BB@@@7OOCO#@@@@@@@@@@@@@@@@@@BBR#     `);
  rl.prompt(true);
}else if(data.type==='bean'){
console.log(`
  
  ─────────────█████████████████▓
  ──────────▒█████████████████████▓
  ─────────█████████████████████████
  ───────▒███████████████████████████
  ──────█████████████████████████████▓
  ─────███████████████████████████████▓
  ────█████████████████████████████████▒
  ───▒█████████████████████████████████▓
  ───████████████████████████████████████
  ──▒██████████████████≥▒████████████████
  ──█████████████████▒───▒███████████████▒
  ─████████████████▓▒───≥≥████████████████
  ─███████████████≥───────≥███████████████
  ██████████████▒─────≥─≥≥≥▒██████████████▓
  █████████████──────≥≥≥≥≥≥▒▓██████████████
  ████████████───────≥≥≥≥≥≥≥≥▒█████████████
  ██████████▓────────≥≥≥≥≥≥▒≥─≥████████████
  █████████▓────≥───≥≥≥≥─≥≥▒▒≥──▒█████████▒
  ████████▒──≥─≥≥≥≥≥─≥─≥≥≥≥▒≥≥──≥▒▒███████▓
  ███████≥──≥≥≥≥≥≥≥─≥≥────▒▒▒▒≥─≥▒≥≥███████
  █████▒──≥≥≥≥≥≥≥≥─≥≥──▒██████≥─≥≥≥≥≥██████
  ████≥─≥≥≥≥≥≥≥≥▒≥≥≥──≥████▓▓██▒▒≥▒≥≥▒█████
  ███▒≥▒≥≥≥▒▒≥≥≥≥≥≥≥──███▓───≥▒▓▓▒▒▒≥▒▒████
  ███▒▒≥▒▒▒▒▒≥≥≥≥≥≥──▒██▓─≥▒▒▒▒▒▒▒▒≥▒▒▒▓██▒
  ███▓▒▒▒▒≥▒▒≥≥▒≥≥──≥███─▓▓▓▒█▓▒▒≥─≥≥▒▒▒███
  ████▒▒▒▒▒▒▒▒≥▒▒≥──███≥▓█▒▒▒▒█▓▒─≥─≥▒▒▒███
  ████▒▒▒▒▒▒▒▒≥≥▒≥─▒██▒≥█▒─▒█≥▒▓──≥≥≥▒▒▒▓██
  █████▒▒≥▒▒▒▒≥≥▒≥≥███≥▒█──██▒▒▒≥≥≥≥≥≥▒▒▓██
  ▒███▓▒▒▒≥▒≥▒≥≥≥▒▒██▒▓▓█▒─▒▒▒▒▒≥≥≥≥≥▒≥▒▓██
  ─████▓▒≥≥─≥≥≥≥≥▒▒▓▒▒███▓▒▒▒▒▒≥──≥≥≥≥▒▒▓██
  ─▓███████▓▒▒▒≥─≥▒──▒▒▒▒▓██▓▒────≥≥≥▒≥▒▒█▓
  ──████████████▒─≥──≥≥≥≥▒▒▒≥─≥───▒≥≥≥▒▒▒██
  ──≥█████████████≥≥─≥≥≥──────────≥≥≥▒▒▒▒█▓
  ───≥█████████████≥─≥▒≥≥≥≥≥≥─────≥≥≥≥▒▒▒█▓
  ─────█████▒▓█≥≥██≥─≥≥▒≥≥▒▒▓▓▒▒≥≥≥≥≥▒▒▒▒█▓
  ──────████─███≥██▓─≥▒≥▒▒▒≥▒▒███▓▒▒▒▒▒▒▒██
  ──────≥███▓≥█▓▒▓██▒≥▒≥▒▒──≥▒≥▒▓██▓▒▒▒▒▓██
  ───────▒███▓▒▓▒▒▓█▓≥─≥≥──▒█▒▒▒▒▓███≥≥▒▓██
  ────────█████▓▒▒▒█▓▒──≥─▓██▒▒▒≥▓███▓─▒▓██
  ─────────▓███▒▒≥▓█▓─≥≥≥▒█▓▒▒▒≥▒█▒─▒█▒▒███
  ──────────█▓≥≥≥▒▓██≥─≥─██▒≥≥≥▒█▓──≥▒▓▓███
  ──────────▒▓≥≥▒▒▓███▒≥▓██▒─≥▒▓▒▒≥≥▒≥▒▒███
  ───────────▓▒▒≥▒▓████████≥▒▒▓▒▒▒≥▒▒≥▒▒▓██
  ───────────≥█▒▒≥▓███████▒▒▓▓▒≥▒▒▒≥▒≥▒▒███
  ────────────▓█▒▒▓██████████▒▒▒▒▒▒▒≥≥▒▒███
  ─────────────██▒▓█████████▓▓█▓▒≥≥≥≥≥▒████
  ──────────────▓██████████▓██▓▒▒≥≥≥≥▒▒████
  ───────────────███▒▓███████▓▒▒▒≥≥≥▒▒█████
  ────────────────███▒▒██████▒▒▒▒≥≥▒▒██████
  ─────────────────≥██▓▓████▓▒▒▒▒▒▒▒███████
  ─────────────────≥████████▓▒▒▒▒▒█████████
  ─────────────────███████████▓▒▓█████████▒
  ────────────────██████████████████▓▓▒▒▒▒▒
  ───────────────██████████████████▒▒▒▒▒▒▒▒
  ──────────────▒███████████████████▓▒▒▒▒▒▒
  ──────────────██████████████████████▒▒▒▒▒
  ─────────────███████████████████████▓▒▒▒▒
  ────────────▒████████████████████████▓▒▒▒
  ────────────██████████████████████████▓▒▒
  ───────────████████████████████████████▓▒
  ──────────≥█████████████████████████▒▓▓█▓
  ──────────██████████████████████████▓≥▓▓▓
  ─────────≥███████████████████████████≥▒▓▒
  ─────────█████████████████████████████≥▒▒
`);
rl.prompt(true);


}else{

colornick = color( data.nickname, `${data.color}`);
    console.log(`${colornick}  ${data.message} `);
rl.prompt(true);

}

});
