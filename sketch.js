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
  r = createButton(' Reset ');
  r.position(625,225)
 // reset.mousePressed(Reset);
 
  play = createButton(' Count ');
  play.position(500,280);
  play.style('width','100px');
  play.style('height','100px');
 // play.mousePressed(mouseP);

 
 // r.touches(Reset);
}


function draw() {  
   background("lightblue");
   textSize(100);
   stroke(10);
   fill("black");
   text(" "+count,50,125);
   r.touches(resetR);
  play.touches(mouseP);
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

function resetR(){
  count=0;
}



