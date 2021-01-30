class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':0.5,
        'density':0.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
        
      World.add(world, this.body);
      }
    display(){
      ellipseMode(RADIUS);
  
      fill("violet");
  
      circle(this.body.position.x, this.body.position.y, this.radius);
    }
    };