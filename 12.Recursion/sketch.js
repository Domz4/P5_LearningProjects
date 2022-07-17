let x,y,d
function setup() {
  createCanvas(1200,800);

}
function draw() {
  background(0);
  noFill();
  stroke(255);
  drawEllipse(width/2,height/2,300);
  noLoop();
}
function drawEllipse(x,y,d) {
    ellipse(x,y,d)
    if (d > 5) {
      let nd = d*0.6
      drawEllipse(x+nd,y,nd);
      drawEllipse(x-nd,y,nd);
      drawEllipse(x,y+nd,nd);
      drawEllipse(x,y-nd,nd);
    }
}
