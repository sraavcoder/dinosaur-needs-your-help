//creating the initial value of r,g,b
var r = 85;
var g = 170;
var b= 255;

function setup(){
//creating the canvas
  createCanvas(1600,400);
}


function draw(){
//giving colour to the canvas
  background(r,g,b);

//creating a mouse pointer
  ellipse(World.mouseX,200,50,50);

//adjusting the the colour of the canvas based on position of the mouse pointer  
r = map(World.mouseX,0,1200,60,119);
g = map(World.mouseX,0,1200,35,170);
b = map(World.mouseX,0,1200,65,215);



}