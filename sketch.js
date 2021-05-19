

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score,balloons;
var allBalloons;
var index = 0;
      var y =0;
      var x;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;
 
}

function draw() {
  // moving ground
    background.velocityY = -3 

    if (background.y < 0){
      background.y = background.width/2;
    }
    
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.x = bow.x;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  
  text("Score:  "+ score,500,50);
  
}

  


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.1
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityY = 3;
  blue.lifetime = 150;
  blue.scale = 0.1
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityY = 3;
  green.lifetime = 150;
  green.scale = 0.1
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityY= 3;
  pink.lifetime = 150;
  pink.scale = 1
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.addImage("arrow");
  arrow.y = 360;
  arrow.y = bow.y;
  arrow.velocityY = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  return arrow;
}


