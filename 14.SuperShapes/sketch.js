let dupa;
let sliderm = document.getElementById
function setup() {
  createCanvas(windowWidth, windowHeight);
  dupa = new supershape(sliderm);
}

function draw() {
  translate(width / 2, height / 2);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(5);
  dupa.update();
}

class supershape {
  constructor(m) {
    this.r = 1;
    this.a = 1;
    this.b = 1;
    this.m = m;
    this.n1 = 0.3;
    this.n2 = 0.3;
    this.n3 = 0.3;

    this.x;
    this.y;
    this.increments = 0.01;
    this.thetha;
    this.part1;
    this.part2;
    this.part3;
  }
  update() {
    this.calcShape();
    this.positions();
  }
  positions() {}

  calcShape() {
    beginShape();
    for (
      this.thetha = 0;
      this.thetha < TWO_PI;
      this.thetha += this.increments
    ) {
      this.part1 = Math.pow(
        Math.abs((1 / this.a) * cos((this.m * this.thetha) / 4)),
        this.n2
      );
      this.part2 = Math.pow(
        Math.abs((1 / this.b) * sin((this.m * this.thetha) / 4)),
        this.n3
      );
      this.part3 = Math.pow(this.part1 + this.part2, 1 / this.n1);
      this.r = this.part3;
      this.x = 50 * this.r * cos(this.thetha);
      this.y = 50 * this.r * sin(this.thetha);

      vertex(this.x, this.y);
    }
    endShape(CLOSE);
  }
}
