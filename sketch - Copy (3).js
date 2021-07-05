const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight=300;

function setup() {
	engine = Engine.create();
	world = engine.world;
  createCanvas(480,800);
  ground1=new ground(240, 800, 480, 10);
  for (var k =0; k<=width; k = k + 80) {
  divisions.push(new ground(k, height-divisionHeight/2, 10, divisionHeight))
  }
//  divisions.push(new ground(240, 800, 480, 10));
  for (var j = 40;j<=width;j=j+50) {
  plinkos.push(new plinko(j,75))
  }
  for (var j = 15;j<=width;j=j+50) {
  plinkos.push(new plinko(j,175))
  }
  for (var j = 40;j<=width;j=j+50) {
  plinkos.push(new plinko(j,275))
  }
  for (var j = 15;j<=width;j=j+50) {
  plinkos.push(new plinko(j,375))
  }
  Engine.run(engine);
  console.log(divisions);
}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  drawSprites();
  ground1.display();
  for (var j=0;j<=plinkos.length-1;j++) {
    plinkos[j].display();
  }
  if (frameCount%60===0) {
    particles.push(new particle(random(width/2-10,width/2+10),10))
  }
  for (var j=0;j<=particles.length-1;j++) {
    particles[j].display();
  }
  for (var j=0;j<=divisions.length-1;j++) {
    divisions[j].display();
  }
}