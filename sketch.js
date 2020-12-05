const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrain = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	topground = new Roof(400,100,300,20);
	topground.shapeColor = color(255);

	bob1 = new Bob(300,500);
	bob1.shapeColor = color(255,0,255);
	
	bob2 = new Bob(350,500);
	bob2.shapeColor = color(255,0,255);
	
	bob3 = new Bob(400,500);
	bob3.shapeColor = color(255,0,255);

	bob4 = new Bob(450,500);
	bob4.shapeColor = color(255,0,255);

	bob5 = new Bob(500,500);
	bob5.shapeColor = color(255,0,255);

	rope1 = new Rope(bob1.body,{x : 300, y : 100})
	rope1.shapeColor = color(255);

	rope2 = new Rope(bob2.body,{x : 350, y : 100})
	rope2.shapeColor = color(255);

	rope3 = new Rope(bob3.body,{x : 400, y : 100})
	rope3.shapeColor = color(255);

	rope4 = new Rope(bob4.body,{x : 450, y : 100})
	rope4.shapeColor = color(255);

	rope5 = new Rope(bob5.body,{x : 500, y : 100})
	rope5.shapeColor = color(255);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  topground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



