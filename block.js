class Block {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.4,
            friction: 0
        }
        this.x = x;
        this.y = y;
        this.w = w
        this.h = h
        this.visibility=225;
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body);

    }
    display() {
        if(this.body.speed<5){
        var blockPos = this.body.position;
        push()
        translate(blockPos.x, blockPos.y);
        rectMode(CENTER)
        //strokeWeight(4);k
        rect(0, 0, this.w, this.h);
        pop()
    }else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        pop();
    }

    }

}







