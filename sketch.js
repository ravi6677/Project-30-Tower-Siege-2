const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, slingShot;
var b1, b2, b3, b4, b5, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15

function setup(){
    createCanvas(2500,1000);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(1000, 700, 100, 100);
    slingShot = new Slingshot(polygon.body, {x:500,y:500});
    stand = new Ground(240,805,160,25);

    b1 = new Block(180,775,30,40);
    b2 = new Block(210,775,30,40);
    b3 = new Block(240,775,30,40);
    b4 = new Block(270,775,30,40);
    b5 = new Block(300,775,30,40);
    b6 = new Block(195,735,30,40);
    b7 = new Block(225,735,30,40);
    b8 = new Block(255,735,30,40);
    b9 = new Block(285,735,30,40);
    b10 = new Block(210,695,30,40);
    b11 = new Block(240,695,30,40);
    b12 = new Block(270,695,30,40);
    b13 = new Block(225,655,30,40);
    b14 = new Block(255,655,30,40);
    b15 = new Block(240,615,30,40);
}

function draw(){
    Engine.update(engine);
    background("black");
    polygon.display();
    slingShot.display();
    stand.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("purple");

    b6.display();
    b7.display();
    b8.display();
    b9.display();
    fill("blue");

    b10.display();
    b11.display();
    b12.display();
    fill("green");

    b13.display();
    b14.display();
    fill("gold");

    b15.display();
    fill("orange");

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}
