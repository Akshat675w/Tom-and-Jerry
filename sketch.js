var tom , tomImg;
var jerry , jerryImg;
var garden , gardenImg;


function preload() {
tomIng = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
jerryImg = loadAnimation("mouce1.png","mouse2.png","mouse3.png","mouse4.png");
gardenImg = loadImage("garden.png");
}


function setup(){
    createCanvas(800,800);
   tom = createSprite(400,400,20,20);
   tom = addAnimation(tomImg);
   tom.scale = 0.5;

   jerry = createSprite(750,400,20,20);
   jerry = addAnimation(jerryImg);
   jerry.velocityX = 5;
   tom.scale = 0.5;

   garden = createSprite(200,200,30,30);
   garden = addImage(gardenImg);
   garden.scale = 1;

}

function draw() {

    background(gardenImg);
    

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
  tom.velocityX = -5;
  tom.changeAnimation("tomImg");
}

}
