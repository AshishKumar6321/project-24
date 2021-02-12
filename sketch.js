
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,plane,rubber,sand,iron;

function setup() {
	createCanvas( 1800, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=createSprite(950,650,1800,10);
	plane.shapecolor="red";
	hammer=createSprite(810,760,300, PI/2);
	hammer.shapecolor="green";
	stone=createSprite(700,620,70,70);
	stone.shapecolor="red";
	rubber =createSprite(910, 550,);
	sand=createSprite(100,100);
	iron=createSprite(500,250,80,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 hammer.display();
stone.display();
iron.display();
rubber.display();
sand.display();
  plane.display();
 
  
  
 
}



