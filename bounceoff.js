//add movingrect and fixedrect sprite

var movingrect,fixedrect;


function setup() {
  createCanvas(1200,800);

  //ceate movingrect sprite
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="green";

  //ceate fixedrect sprite
  fixedrect=createSprite(400,100,50,80);
  fixedrect.shapeColor="green";

  //set velocity to both the objects
  movingrect.velocityY=-5;
  fixedrect.velocityY=+5;
}

function draw() 
{
  //clear the background
  background(0);  

  //call the bounceoff function
  bounceOff(fixedrect,movingrect);
  
  //draw the sprites
  drawSprites();

}

