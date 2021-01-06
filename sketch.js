var backgroundImage, database;
var gamestate=0;
var playercount=0;
var form,player,game;



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
  game.getState()
  game.start()
 
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}


