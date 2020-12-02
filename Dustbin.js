class Dustbin  {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.image=loadImage("dustbin.png");

        
        World.add(world, this.image);
    }
      display(){
        
       
        push();
         imageMode(CENTER);
         image(this.image,1200,500,250,200);
        
      }        
    }
