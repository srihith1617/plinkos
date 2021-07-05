class particle  {
    constructor (x,y) {
        this.body=Bodies.circle(x,y,10,{isStatic:false,restitution: 0,friction:0, density:0.1});
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255), random(0,255));
    }
    display() {
        var pos=this.body.position;
        fill(this.color);
        ellipse(pos.x, pos.y, 20,20);
    }
}