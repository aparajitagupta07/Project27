class Roof {
    constructor(x,y,width,height){
      var options = {
        isStatic: true,  
        restitution:0.3,
        friction: 0.5,
        density: 1.2
      }
      this.width = 550;
      this.height = 25;
      this.body = Bodies.rectangle(400, 300, this.width, this.height, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("black")
      rect(0, 0, this.width, this.height);
      pop();
    }
  }