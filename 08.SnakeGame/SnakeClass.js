class Snake {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.r = 20
    this.xspeed = 0
    this.yspeed = 0
    this.s = 20;
    this.total = 0;
    this.tail = [];
  }
  move() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x,this.y);

    this.x = this.x + this.xspeed*this.s;
    this.y = this.y + this.yspeed*this.s;

    this.x = constrain(this.x, 0, width-this.r);
    this.y = constrain(this.y, 0, height-this.r);

  }
  show() {
    for (let i = 0; i < this.tail.length; i++) {
      fill(125,200,50);
      rect(this.tail[i].x,this.tail[i].y,20);
      }

    noStroke();
    fill(125,200,50);
    rect(this.x,this.y,this.r);
  }
  dir(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  eat() {
    let d = dist(this.x,this.y,apple.x,apple.y)
      if (d < 1) {
        this.total++;
        pickLocation();
      }
  }
  death() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x,this.y,pos.x,pos.y);
      if (d < 1) {
        console.log('gameower');
        this.total = 0;
        this.tail = [];
      }
    }
  }
}
