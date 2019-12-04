//add movingrect and fixedrect sprite
var movingrect,fixedrect;


function setup() {
  createCanvas(800,400);

  //ceate movingrect sprite
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";

  //create fixedrect sprite
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
}

function draw() 
{
  //clear the background
  background(0);  

  //give control to movingrect
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  //change the x-axis of both the object when they touch each other
  if(isTouching(movingrect,fixedrect))
  {
    movingrect.x=500;
    fixedrect.x=100;



  }
  else
  {
    //make the colour same when the function is not true
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  

  //draw sprites
  drawSprites();

}

