const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1350, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 500, 20);

  ground = new Ground(800, 610, 1800, 20);
  
  leftSide = new Dustbin(920, 500, 20, 160);
  bottom = new Dustbin(1030, 590, 240, 20);
  rightSide = new Dustbin(1140, 500, 20, 160);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0,100,100);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y: -15})
  }
}
