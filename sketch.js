var Earth, Sun;

function setup() {
  createCanvas(800,400);
 Sun =  createSprite(400, 200, 100, 100);
  Earth = createSprite(600,200,50,50);
}
function draw() {
  background("black");  
  drawSprites();
Earth.velocityX = -8; 
Earth.velocityY = -3;
if(Sun.collide(Earth)){
  Earth.destroy();
}

}