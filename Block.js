class Block{
  constructor(x, y, width, height) {
    var options = {
    restitution :0.4,
    friction :0.0,
    //isStatic:true
  }
  this.visibility = 225;
  this.body = Bodies.rectangle(x, y, 30,40, options);
  this.width = width;
  this.height = height;
  this.image = loadImage("block.png");
  World.add(world, this.body);
  }
  display(){
    if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
    else{
      push();
      World.remove(world,this.body);
      tint(255,this.visibility);
      this.visibility = this.visibility -5;
      imageMode(CENTER);
      image(this.image ,this.body.position.x,this.body.position.y,30,40);
      pop();
      
    }
  }
}