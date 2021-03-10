const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, hero, fly, monster;

var bg;

var col1 = [];
var col2 = [];
var col3 = [];

function preload() {
  //preload the images here
  bg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1600, 600);
  
  
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(600, 400, 1200, 10);
  hero = new Hero(300, 250, 450, 200);
  monster = new Monster(1100, 250, 450, 200);
  fly = new SlingShot(hero.body, { x: 300, y: 10 });
 
  
  
  for (let i = 50; i < 400; i += 50) {
    col1.push(new Box(600, i, 50, 50));
  }
  for (let i = 125; i < 400; i += 50) {
    col2.push(new Box(700, i, 50, 50));
  }
  for (let i = 25; i < 400; i += 50) {
    col3.push(new Box(800, i, 50, 50));
  }
}

function draw() {

  background(bg)
  Engine.update(engine);

  ground.display();
  hero.display();
  monster.display();

  for (let i = 0; i < col1.length; i++) {
    col1[i].display();
  }
  for (let i = 0; i < col2.length; i++) {
    col2[i].display();
  }
  for (let i = 0; i < col3.length; i++) {
    col3[i].display();
  }
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  fly.fly();
}
