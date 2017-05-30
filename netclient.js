const net = require('net');
const readline = require('readline');
const color = require("ansi-color").set;
const figlet = require('figlet');
const rl = readline.createInterface(process.stdin, process.stdout);
const HOST = '127.0.0.1';
const PORT = 6969;
let nickname;
let defaultcolor;
const client = new net.Socket();
client.connect(PORT, HOST, function() {});


rl.question("Please enter a color:", (color) =>{
      defaultcolor = color
      rl.prompt(true);
      rl.question("Please enter a nickname:", (name) =>{

          let newcomer = ` is newcomer`;
            nickname = name;
client.write(JSON.stringify({message: newcomer,nickname:nickname,color:defaultcolor}));
      });

});



rl.on('line',(line)=>{
conscom(line);
});




client.on('data',(data)=>{



  if(JSON.parse(data).type=='bear'){

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
  }else if(JSON.parse(data).type=='shrug'){
  console.log(`¯\_(ツ)_/¯`);
  rl.prompt(true);
}else if(JSON.parse(data).type=='ascii'){


figlet(  JSON.parse(data).message.split(':')[1], function(err, data) {
   if (err) {
       console.log('ERROR PLZ CLEAN THE SCREEN');
       console.dir(err);
       return;
   }
   console.log(data);
   rl.prompt(true);
});
  rl.prompt(true);
  }else if(JSON.parse(data).type==='fry'){
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
  }else if(JSON.parse(data).type==='bean'){
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


  }else if(JSON.parse(data).type==='alien'){
  console.log(`
  QR
  #t(@
  @R
  @S
  RSQ
  @K@
  #KQ7
  RSQ@
  @%GC(7Q/
  #@K%C6QKCCC6@
  (@%CC3%C3CC%CCCC6Q
  GCCC%C3CC66CCCsCCC@
  sQ3C6CCCC%CCC3CCCCC%C7
  @6%CCCCCOC6CsCCC66O%s@
  GsCCC36CC6CC6%%CC%CC%@
  GC36C3s%CCCCsCC%C%C%CsG
  sCCC666CCCCC6%CC%CCsRG%#7
  C6%C63CRQGC3C77%7(t((t((7Q^
  sC3CC@C((t((7QG#K#@@@@@@@@G7Q
  S6CCO#(t((@%/%O@@@@@@O(//R@@sC
  QsCC6st(%@        CG       @@s@
  @OCCC%((%R/C@      RC      @@7@
  @OO3s@(((@/       (R/      @#R(
  @s3CCCQC(t%%GQRQQQ##QGCGC((7R
  GGCCCsCCCG36SGQKSSSGsss
  Gs6C6CCCCCCCCCCs6CC6CC3
  /@CCC3Cs3GSQQQ#QRGQS@@Q
  @3%C@@(@///%///((((
  @CCOR/(@(O%O%%((((((
  GCCs@%(@///%////(((C
  CCCCG@(@%%CQ%%%%O(/#C
  sC3C%CCGGQQ#QQGGG6CC#@
  @((%@#3CC3%C3CC%CCCCsQC((Q7
  #Qt((t((7%Q#R@QK@Q#QG37((t((7@
  %3((t(((((((t((t((t((t(tt((t(t((t@
  %7t((t((t((((tt((((((((t(tt(t((t(((#C
  `);
  rl.prompt(true);
}else if(JSON.parse(data).type==='troll'){
  console.log(`


    .....'',;;::cccllllllllllllcccc:::;;,,,''...'',,'..
             ..';cldkO00KXNNNNXXXKK000OOkkkkkxxxxxddoooddddddxxxxkkkkOO0XXKx:.
       .':ok0KXXXNXK0kxolc:;;,,,,,,,,,,,;;,,,''''''',,''..              .'lOXKd'
  .,lx00Oxl:,'............''''''...................    ...,;;'.             .oKXd.
.ckKKkc'...'',:::;,'.........'',;;::::;,'..........'',;;;,'.. .';;'.           'kNKc.
.:kXXk:.    ..       ..................          .............,:c:'...;:'.         .dNNx.
:0NKd,          .....''',,,,''..               ',...........',,,'',,::,...,,.        .dNNx.
.xXd.         .:;'..         ..,'             .;,.               ...,,'';;'. ...       .oNNo
.0K.         .;.              ;'              ';                      .'...'.           .oXX:
.oNO.         .                 ,.              .     ..',::ccc:;,..     ..                lXX:
.dNX:               ......       ;.                'cxOKK0OXWWWWWWWNX0kc.                    :KXd.
.l0N0;             ;d0KKKKKXK0ko:...              .l0X0xc,...lXWWWWWWWWKO0Kx'                   ,ONKo.
.lKNKl...'......'. .dXWN0kkk0NWWWWWN0o.            :KN0;.  .,cokXWWNNNNWNKkxONK: .,:c:.      .';;;;:lk0XXx;
:KN0l';ll:'.         .,:lodxxkO00KXNWWWX000k.       oXNx;:okKX0kdl:::;'',;coxkkd, ...'. ...'''.......',:lxKO:.
oNNk,;c,'',.                      ...;xNNOc,.         ,d0X0xc,.     .dOd,           ..;dOKXK00000Ox:.   ..''dKO,
'KW0,:,.,:..,oxkkkdl;'.                'KK'              ..           .dXX0o:'....,:oOXNN0d;.'. ..,lOKd.   .. ;KXl.
;XNd,;  ;. l00kxoooxKXKx:..ld:         ;KK'                             .:dkO000000Okxl;.   c0;      :KK;   .  ;XXc
'XXdc.  :. ..    '' 'kNNNKKKk,      .,dKNO.                                   ....       .'c0NO'      :X0.  ,.  xN0.
.kNOc'  ,.      .00. ..''...      .l0X0d;.             'dOkxo;...                    .;okKXK0KNXx;.   .0X:  ,.  lNX'
,KKdl  .c,    .dNK,            .;xXWKc.                .;:coOXO,,'.......       .,lx0XXOo;...oNWNXKk:.'KX;  '   dNX.
:XXkc'....  .dNWXl        .';l0NXNKl.          ,lxkkkxo' .cK0.          ..;lx0XNX0xc.     ,0Nx'.','.kXo  .,  ,KNx.
cXXd,,;:, .oXWNNKo'    .'..  .'.'dKk;        .cooollox;.xXXl     ..,cdOKXXX00NXc.      'oKWK'     ;k:  .l. ,0Nk.
cXNx.  . ,KWX0NNNXOl'.           .o0Ooldk;            .:c;.':lxOKKK0xo:,.. ;XX:   .,lOXWWXd.      . .':,.lKXd.
lXNo    cXWWWXooNWNXKko;'..       .lk0x;       ...,:ldk0KXNNOo:,..       ,OWNOxO0KXXNWNO,        ....'l0Xk,
.dNK.   oNWWNo.cXK;;oOXNNXK0kxdolllllooooddxk00KKKK0kdoc:c0No        .'ckXWWWNXkc,;kNKl.          .,kXXk,
'KXc  .dNWWX;.xNk.  .kNO::lodxkOXWN0OkxdlcxNKl,..        oN0'..,:ox0XNWWNNWXo.  ,ONO'           .o0Xk;
.ONo    oNWWN0xXWK, .oNKc       .ONx.      ;X0.          .:XNKKNNWWWWNKkl;kNk. .cKXo.           .ON0;
.xNd   cNWWWWWWWWKOkKNXxl:,'...;0Xo'.....'lXK;...',:lxk0KNWWWWNNKOd:..   lXKclON0:            .xNk.
.dXd   ;XWWWWWWWWWWWWWWWWWWNNNNNWWNNNNNNNNNWWNNNNNNWWWWWNXKNNk;..        .dNWWXd.             cXO.
.xXo   .ONWNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNK0ko:'..OXo          'l0NXx,              :KK,
.OXc    :XNk0NWXKNWWWWWWWWWWWWWWWWWWWWWNNNX00NNx:'..       lXKc.     'lONN0l.              .oXK:
.KX;    .dNKoON0;lXNkcld0NXo::cd0NNO:;,,'.. .0Xc            lXXo..'l0NNKd,.              .c0Nk,
:XK.     .xNX0NKc.cXXl  ;KXl    .dN0.       .0No            .xNXOKNXOo,.               .l0Xk;.
.dXk.      .lKWN0d::OWK;  lXXc    .OX:       .ONx.     . .,cdk0XNXOd;.   .'''....;c:'..;xKXx,
.0No         .:dOKNNNWNKOxkXWXo:,,;ONk;,,,,,;c0NXOxxkO0XXNXKOdc,.  ..;::,...;lol;..:xKXOl.
,XX:             ..';cldxkOO0KKKXXXXXXXXXXKKKKK00Okxdol:;'..   .';::,..':llc,..'lkKXkc.
:NX'    .     ''            ..................             .,;:;,',;ccc;'..'lkKX0d;.
lNK.   .;      ,lc,.         ................        ..,,;;;;;;:::,....,lkKX0d:.
.oN0.    .'.      .;ccc;,'....              ....'',;;;;;;;;;;'..   .;oOXX0d:.
.dN0.      .;;,..       ....                ..''''''''....     .:dOKKko;.
lNK'         ..,;::;;,'.........................           .;d0X0kc'.
.xXO'                                                 .;oOK0x:.
.cKKo.                                    .,:oxkkkxk0K0xc'.
.oKKkc,.                         .';cok0XNNNX0Oxoc,.
.;d0XX0kdlc:;,,,',,,;;:clodkO0KK0Okdl:,'..
.,coxO0KXXXXXXXKK0OOxdoc:,..
         ...




  `);
  rl.prompt(true);

}else if(JSON.parse(data).type==='love'){
  console.log(`


    -.▀██▀
    ──██────(▒)(▒)
    ──██───(▒)(♥)(▒)
    ─▄██▄▄█─(▒)(▒)
    ───.───▄███▄
    ───.──███─███─(▒)(▒)
    ───.──▀██▄██▀(▒)(♥)(▒)
    ───.────███───(▒)(▒)
    ───.─────── ▀██─██▀
    ───.──────── ██─██─(▒)(▒)
    ───.──────── ▀█▄█▀(▒)(♥)(▒)
    ───.──────────▀───(▒)(▒)
    ───.────────────██▀▀▀█
    ───.──(▒)(▒)──────██▄█──(▒)(▒)
    ───.─(▒)(♥)(▒)─────██▀█─(▒)(♥)(▒)
    ───.──(▒)(▒)──────██▄▄▄█(▒)(▒)



    `);
      rl.prompt(true);
}else if(JSON.parse(data).type==='like'){

console.log(`


  ░░░░░░░░░░░░▄▄
  ░░░░░░░░░░░█░░█
  ░░░░░░░░░░░█░░█
  ░░░░░░░░░░█░░░█
  ░░░░░░░░░█░░░░█
  ███████▄▄█░░░░░██████▄
  ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
  ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
  ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
  ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
  ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
  ▓▓▓▓▓▓█████░░░░░░░░░█
  ██████▀░░░░▀▀██████▀

  `);
  rl.prompt(true);
}else{

    colornick = color( JSON.parse(data).nickname, `${JSON.parse(data).color}`);
      console.log(`${colornick}    ${JSON.parse(data).message} `);
      rl.prompt(true);


}


});



const conscom=(line)=>{
let spliter = line.split(':')


    switch (spliter[0]) {
    case '/chcolor':
    defaultcolor=line.split(':')[1].split(' ')[0];
    client.write(JSON.stringify({  message:line,nickname:nickname,color:defaultcolor }));
    rl.prompt(true);
      break;
    case '/chnick':
    nickname=line.split(':')[1].split(' ')[0];
    client.write(JSON.stringify({   message:line, nickname: nickname,color:defaultcolor }));
    rl.prompt(true);
      break;
      case '/ascii':
        client.write(JSON.stringify({  type:'ascii', message:line, nickname: nickname }));
        break;
    case '/clear':
    process.stdin.write('\u001b[2J\u001b[0;0H');
    rl.prompt(true);
      break;
    case '/bear':
    client.write(JSON.stringify({   type:'bear', message:line, nickname: nickname }));
      break;
    case '/shrug':
      client.write(JSON.stringify({  type:'shrug', message:line, nickname: nickname }));
      break;
      case '/fry':
        client.write(JSON.stringify({  type:'fry', message:line, nickname: nickname }));
        break;
        case '/bean':
          client.write(JSON.stringify({  type:'bean', message:line, nickname: nickname }));
          break;
          case '/alien':
            client.write(JSON.stringify({  type:'alien', message:line, nickname: nickname }));
            break;
            case '/troll':
              client.write(JSON.stringify({  type:'troll', message:line, nickname: nickname }));
              break;
              case '/love':
                client.write(JSON.stringify({  type:'love', message:line, nickname: nickname }));
                break;
                case '/like':
                  client.write(JSON.stringify({  type:'like', message:line, nickname: nickname }));
                  break;
    default:
    client.write(JSON.stringify({ message:line, nickname: nickname,color:defaultcolor }));
  }



}
