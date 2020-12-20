const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480, 600);

  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var i = 15; i <= width - 10; i = i + 50) {
    plinkos.push(new Plinko(i, 175));
  }

  ground = new Ground(250, 580, 500, 20);
  Engine.run(engine);
}

function draw() {

  background(0);

  /*if (frameCount % 90 === 0) {
    particles.push(new Particles(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }*/
  ground.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display
  }
  
  drawSprites();

}
