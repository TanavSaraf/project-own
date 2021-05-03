
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paddle,ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paddle=Bodies.rectangle(400,600,50,20,{
		isStatic:false,
		'restitution':1
	})

	ball=Bodies.circle(400,520,20,{
		isStatic:false,
		'restitution':1.2
	})

	//Engine.run(engine);
  
}


function draw() {

  background(0);
 Engine.update(engine)  
  drawSprites();
 rectMode(CENTER)
 ellipseMode(CENTER)
 console.log(paddle.position.y)
  rect(paddle.position.x,paddle.position.y,50,20)
  ellipse(ball.position.x,ball.position.y,20,20)
}



