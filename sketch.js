const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1400, 690);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 0, 20);

  ground = new Ground(800, 680, 1800, 20);
  
  leftSide = new Dustbin(920, 570, 20, 160);
  bottom = new Dustbin(1030, 660, 240, 20);
  rightSide = new Dustbin(1140, 570, 20, 160);

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
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}