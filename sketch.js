
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var dustbin, ground, paperObject;
var dustbinObject, groundObject, paperObject;

	


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20);
	dustbin = new Dustbin(1200, 650);
	paperObject = new Paper(200, 450, 40);
	//groundObject = new Ground(width/2,670,width,20);
	//dustbinObj = new Dustbin(1200,650);

	var render = Render.create({
		element: document.body,
		engine:engine, 
		options:{
			width:1200,
			height:700,
			wireframes:false
		}

	});
	Engine.run(engine);
	Render.run(render);

  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display();
  paperObject.display();
  dustbin.display();
  //groundObject.display();
  //dustbinObject.display();
}

//dustbin.display();

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:130, y:-145});
	}
}
