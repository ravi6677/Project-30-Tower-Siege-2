class Polygon{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        
        World.add(world, this.body);
    }

display(){
    var positionX = this.body.position.x;
    var positionY = this.body.position.y;
    var angle = this.body.angle;
    push();

    translate(positionX, positionY);
    rotate(angle);

    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
}
}
    
