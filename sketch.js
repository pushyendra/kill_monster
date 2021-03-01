const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1,box2,box3,box4,box5,box6;
var monster1;
var ground;
var hero;
var flys;
var Background;

function preload(){
    Background = loadImage("Background.png");
    
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,490,600,20)
    hero=new Hero(250,250,10);
    box1 = new Box(600,300,50,50)
    box2 = new Box(600,310,50,50)
    box3 = new Box(600,320,50,50)
    box4 = new Box(600,330,50,50)
    box5 = new Box(600,340,50,50)
    box6 = new Box(600,350,50,50)
    monster1 = new Monster(800,200,20)
    flys=new Fly(hero.body,{x:400,y:200});

}

function draw(){
    background(Background)
    
    Engine.update(engine);
    flys.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    monster1.display();
    hero.display();
    
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(hero.body,hero.body.position,{x:2,y:-3});      
    }
}
function mouseDragged(){
   Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
flys.fly();
}
