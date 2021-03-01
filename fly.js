class Fly{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness:0.004,
            length: 5
        }
        this.pointB = PointB;
        this.flying = Constraint.create(options);
        World.add(world, this.flying);
    }

    fly(){
        this.flying.bodyA = null;
    }

    display(){
        push();
        if(this.flying.bodyA){
            var pointA = this.flying.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(0.5);
            stroke(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        pop();
    }
    
}