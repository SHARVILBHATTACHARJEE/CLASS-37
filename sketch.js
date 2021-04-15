var db;
var form,game,player;
var playerCount
var gameState=0
var all;

function setup(){
    createCanvas(500,500);
    db=firebase.database()
    game=new Game()
    game.getState()
    game.start()
   
}

function draw(){
   if(playerCount===4){
       game.updateState(1)
   }
   if(gameState===1){
       game.play()
   }
}

