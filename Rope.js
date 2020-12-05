class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.rope = Constrain.create(options);
        World.add(world, this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position;
        fill("white");
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        
    }
    
}