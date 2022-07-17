class pendulum {
  constructor(a1=90,a2=45,m1 = 45,m2 = 25,g = 0.2, v1 = 0, v2 = 0) {
    // static X,Y  
    this.staticX = 500;
    this.staticY = 20;
    // first bob location    
    this.x1;
    this.y1;
    // second bob location
    this.x2;
    this.y2;
    // angle
    this.a1 = a1;
    this.a2 = a2;
    // velocity
    this.v1 = v1;
    this.v2 = v2;
    // acceleration
    this.acc1 = 0;
    this.acc2 = 0;
    // mass of 2 bob's
    this.m1 = m1;
    this.m2 = m2;
    // gravity
    this.g = g;
    // diameter of the bob
    this.r = 50;
    // lenght of rod's
    this.L1 = 525;
    this.L2 = 225;
    //history
  }
  show() {
    strokeWeight(2);
    stroke(255);
    //line(0, 0, this.x1, this.y1);
    //line(this.x1, this.y1, this.x2, this.y2);
    push();
    noStroke();
    ellipse(this.x1, this.y1, this.r);
    ellipse(this.x2, this.y2, this.r);
    pop();
  }
  update() {
    this.calcVel();
    this.calcACC();
    this.positions();
  }
  positions() {
    this.a1 += this.v1;
    this.a2 += this.v2;
    this.x1 = this.L1 * sin(this.a1);
    this.y1 = this.L1 * cos(this.a1);
    this.x2 = this.x1 + this.L2 * sin(this.a2);
    this.y2 = this.y1 + this.L2 * cos(this.a2);
  }
  calcACC() {
    let {m1,m2,a1,a2,v1,v2,L1,L2,g} = this
    let denominator = L1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)) 
    this.acc1 = (
      -g * (2 * m1 + m2) * sin(a1) +
      -m2 * g * sin(a1 - 2 * a2) +
      -2 * sin(a1 - a2) * m2 *
      (v2 * v2 * L2 + v1 * v1 * L1 * cos(a1 - a2))
    ) / denominator
    this.acc2 = (
      2 * sin(a1 - a2) * (
        v1 * v1 * L1 * (m1 + m2) +
        g * (m1 + m2) * cos(a1) +
        v2 * v2 * L2 * m2 * cos(a1 - a2)
      )
    ) / denominator
  }
  calcVel() {
    this.v1 += this.acc1
    this.v2 += this.acc2
    //this.v1 *= 0.999
    //this.v2 *= 0.999
  }
}
