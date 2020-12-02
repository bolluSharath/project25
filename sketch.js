
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var paper1,box1,ground,paperImage,dustbinImage;

function preload()
{
	paperImage=loadImage("paper.png")
	
}

function setup() {
	createCanvas(1600, 2000);

	
	

	engine = Engine.create();
	world = engine.world;

	
	

	ground=new Ground(1000,600,2000,20);
	paper1=new Paper(150,400,50)
	box1=new Box(1300,500,20,180);
	box2=new Box(1100,500,20,180);
	box3=new Box(1200,570,200,20);
	dustbin1=new Dustbin(800,600,50,50);
	
	





	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)

	
	box1.display();
	box2.display();
	box3.display();
	ground.display();
	paper1.display();
	dustbin1.display();
	
	

	keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35,})
	}
}


