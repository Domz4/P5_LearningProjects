let x=[12,42,52,64,1,20];

function setup () {
  createCanvas(800,400);
}
function draw () {
  background(0);
  for (let i=0; i<6; i++) {
    stroke(255);
    fill(x[i],x[i+52],x[i+100]);
    ellipse(i*100+100,200,x[i],x[i]);


  }
}
