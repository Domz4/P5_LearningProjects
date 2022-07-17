let vektor = []
function setup() {
  createCanvas(600,600);
  background(0);

}
function mousePressed() {
  let v = createVector(mouseX,mouseY);
  vektor.push(v);
}

function draw() {
  let reached = [];
  let unreached = [];
  for (let i=0;i<vektor.length;i++) {
    unreached.push(vektor[i]);
  }
  reached.push(unreached[0]);
  unreached.splice(0,1);
  while(unreached.length>0) {
    let record = 100000;
    let rIndex;
    let uIndex;
    for(let i = 0; i < reached.length; i++) {
      for(let j = 0; j < unreached.length; j++) {
        let d = dist(reached[i].x, reached[i].y, unreached[j].x, unreached[j].y);
        if (d < record) {
          record = d;
          rIndex = i;
          uIndex = j;
        }
      }
    }
    stroke(255);
    line(
      reached[rIndex].x,
      reached[rIndex].y,
      unreached[uIndex].x,
      unreached[uIndex].y,
    );
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);
  }
  for(let i = 0; i < vektor.length; i++) {
    noStroke();
    fill(255);
    ellipse(vektor[i].x,vektor[i].y,15);
  }
}
