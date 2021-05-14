//Create variables here
var count=0;
var play;
var reset;


function preload()
{
	//load images here
}

function setup() {
	createCanvas(400,400);
  
 // play = createSprite(200,260,100,100);
  //play.shapeColor = "green";
  //reset = createSprite(300,200,80,20);
  reset = createButton(' Reset ');
  reset.position(625,225)
  reset.mousePressed(Reset);
 // reset.touch(Reset);
  play = createButton(' Count ');
  play.position(500,280);
  play.style('width','100px');
  play.style('height','100px');
  play.mousePressed(mouseP);
 // play.touch(mouseP);
}


function draw() {  
   background("lightblue");
   textSize(100);
   stroke(10);
   fill("black");
   text(" "+count,50,125);
  // mouseP();
  if (touch[0].isTouching(play)) {
    mouseP();
  }

  if (touch[0].isTouching(reset)) {
    Reset();
  }
   
   
  drawSprites();
  //add styles here

}

function mouseP(){
  //if (mousePressedOver(play) ) {
  count=count+1;
 // }
}

function Reset(){
  count=0;
}



