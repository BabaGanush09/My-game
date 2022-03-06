var Gbackground, GbackgroundImg;
var Miles, MilesImg;


function preload(){
  GbackgroundImg = loadImage("GalaxyBackground.jpg")
 
}

function setup(){
  createCanvas(windowWidth, windowHeight);
Gbackground = createSprite(width/2, height/2);
Gbackground.addImage(GbackgroundImg);
Miles = createSprite(width/2, height/2);
}


function draw(){
Miles.velocityY=0;
Miles.velocityX=0;

if(keyIsDown(87)){
  Miles.velocityY=-5;
}
if(keyIsDown(83)){
  Miles.velocityY=+5;
}
if(keyIsDown(65)){
  Miles.velocityX=-5;
}
if(keyIsDown(68)){
  Miles.velocityX=+5;
}
camera.position.y=Miles.y;
camera.position.x=Miles.x;




drawSprites();

}
