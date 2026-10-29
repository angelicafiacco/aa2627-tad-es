// Illusione: tunnel rotante (rappresentazione astratta)
// Fonte: https://en.wikipedia.org/wiki/Spinning_tunnel
// Regola: quadrati concentrici di dimensione decrescente ruotano a velocità diverse per rappresentare il movimento dei motivi in un tunnel rotante.
// Parametri critici: reductionFactor, rotationSpeed, alphaVal
// Effetto visibile con reductionFactor=1.08, rotationSpeed=0.5, alphaVal=40;
// movimento assente con rotationSpeed=0

let canvasSize = 600;
let initialSize = 420;
let minSize = 40;
let reductionFactor = 1.08;
let rotationSpeed = 0.5;
let alphaVal = 40;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(255);
  
  translate(width / 2, height / 2);
  rectMode(CENTER);
  
  let i = 0;
  for (let x = initialSize; x >= minSize; x = x / reductionFactor) {
    push();
    let angle = frameCount * rotationSpeed * (i + 1);
    rotate(radians(angle));
    noStroke();
    fill(0, alphaVal);
    rect(0, 0, x, x);
    pop();
    i++;
  }
}