var ball;
var ballPosition, pos;
var database

function setup() {
  createCanvas(400,400);
  database = firebase.database()

  ball=createSprite(200, 200, 20, 20);
  ballPosition=database.ref("ball/position");
  ballPosition.on("value",readPosition)
  
}

function draw() {
  background("skyblue");  

  if(keyDown (UP_ARROW)){
    writePosition(0,-2)
  }
  else if(keyDown (DOWN_ARROW)){
    writePosition(0,+2)
  }
  else if(keyDown (RIGHT_ARROW)){
    writePosition(2,0)
  }
  else if(keyDown (LEFT_ARROW)){
    writePosition(-2,0)
  }
  drawSprites();
}

function readPosition(data) {

  pos = data.val()
  ball.x = pos.x;
  ball.y = pos.y;

}

function writePosition(x,y){

  database.ref("ball/position").set ({
    "x": pos.x+x,
    "y": pos.y+y
    })
}










