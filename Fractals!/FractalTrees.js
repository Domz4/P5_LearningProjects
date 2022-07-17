let rules = [];
let axiom;
let sentence;
let button, found;
let len = 250;
let angle;
axiom = "X"
sentence = axiom
rules[0] = {
  a: "F",
  b: "FF"
}
rules[0] = {
  a: "X",
  b: "F-[[X]+X]+F[+FX]-X"
}
function generate() {
  len *= 0.5;
  let nextSentence = ''
  for (let i=0; i<sentence.length; i++) {
    let current = sentence.charAt(i);
    found = false;
    for (let j=0; j<rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
    nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}
function turtle() {
  resetMatrix();
  translate(width/2,height);
  for (let i=0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
     if (current == "F"){
       stroke(80,30,0);
       line(0,0,0,-len);
       translate(0, -len);
     } else if (current == "+") {
       rotate(angle);
     } else if (current == "-") {
       rotate(-angle);
     } else if (current == "[") {
       push();
     } else if (current == "]") {
       pop();
     }

  }

}
function setup() {

  angle = radians(22.5);
  createCanvas(1400,800);
  background(255,255,215);
  rectangle();
  createP(axiom);
  turtle();
  button = createButton("next");
  button.mousePressed(generate);
}
function rectangle() {
  fill(210,255,220,180);
  noStroke();
  rotate(radians(20))
  translate(100,-250)
  quad(400,400,700,100,1000,400,700,700);
}














// slider1 = createSlider(0,PI, PI/12,0.001);
// slider1.style('width','1198px');
// slider2 = createSlider(0,);
// do draw // angle = slider1.value();
