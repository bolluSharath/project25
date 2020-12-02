class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.image=loadImage("paper.png")
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
     var pos = this.body.position

      push();
      fill("white");
      stroke("white")
      translate(pos.x,pos.y);
      circle(0,0,this.radius);
      image(this.image,-150,10,50,50);
      stroke("white")
      pop();

    }
  };
  