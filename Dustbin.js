class Dustbin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dustbinWidth  = 200;
        this.dustbinHeight = 213;
        this.wallThickness = 20;
        //this.angle = 0;

        this.image = loadImage("trashcangreen.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
        World.add(world, this.bottomBody);

        this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        //Matter.Body.setAngle(this.leftBody, this.angle);
        World.add(world, this.leftBody);
            
        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true});
        //Matter.Body.setAngle(this.rightBody, -1*this.angle);
        World.add(world, this.rightBody);
    }
    display(){
        var bottompos = this.bottomBody.position;
        var leftpos = this.leftBody.position;
        var rightpos = this.rightBody.position;

        push()
        translate(bottompos.x, bottompos.y+10);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255); 
        imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
        //rotate(this.angle);
        //rect(0, 0, this.dustbinWidth, this.wallThickness);
        pop()

        push()
        translate(leftpos.x, leftpos.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        rotate(this.angle)
        //rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop()

        push()
        translate(rightpos.x, rightpos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.angle)
        //rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop()
    }


}
