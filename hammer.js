class Hammer {
  constructor(x, y, height, angle) {
      var option={
        'density':2,
        'frition':1.0,
        'restitution':0.5
    }
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
};
   