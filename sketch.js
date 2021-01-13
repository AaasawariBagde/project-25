const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var world;
var paper;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);
	//reactMode(CANTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,550,1200,20);
	paper = new Paper(100,350,50);
	dustbin1 = new Dustbin(1000,540);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CANTER);
  Engine.update(engine);
  background(255);
  
  paper.display();
  ground.display();
  dustbin1.display();
  
  fill("black");
  textSize(16);
  text("USE UP ARROW KEYS TO MOVE THE PAPER", 200,100);
  text("GOAL: PUT PAPER IN THE DUSTBIN", 200,120);

}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
