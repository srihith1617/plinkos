class plinko  {
    constructor (x,y) {
        this.body=Bodies.circle(x,y,10,{isStatic:true,restitution: 0,friction:0, density:0.1});
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        fill("white");
        ellipse(pos.x, pos.y, 20,20);
    }
}