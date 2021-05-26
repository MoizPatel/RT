//Create variables here
var count=0;
var play;
var r;


function preload()
{
	//load images here
}

function setup() {
	createCanvas(400,400);
  
 // play = createSprite(200,260,100,100);
  //play.shapeColor = "green";
  //reset = createSprite(300,200,80,20);
  restart = createButton(' Reset ');
  restart.position(625,225)
  restart.mousePressed(reset);
 
  play = createButton(' Count ');
  play.position(500,280);
  play.style('width','100px');
  play.style('height','100px');
  play.mousePressed(mouseP);

 
 // r.touches(Reset);
}


function draw() {  
   background("lightblue");
   textSize(100);
   stroke(10);
   fill("black");
   text(" "+count,50,125);
   //restart.touches(resetR);
 // play.touches(mouseP);
  if (touches.length > 0) { 
    if (restart.overlapPoint(touches[0].x, touches[0].y)) { reset(); touches = [] }
   }

   if (touches.length > 0) { 
    if (play.overlapPoint(touches[0].x, touches[0].y)) { mouseP(); touches = [] }
   }
  // mouseP();
 /* if (touches(play)) {
    mouseP();
  }

  if (touches(reset)) {
    Reset();
  }*/
   
   
  drawSprites();
  //add styles here

}

function mouseP(){
  
  count=count+1;
 
}

function reset(){
  count=0;
}



