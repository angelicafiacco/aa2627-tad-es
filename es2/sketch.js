// Opera: Frank Stella, Honduras Lottery Co., 1972.
// Fonte: https://www.wikiart.org/en/frank-stella/honduras-lottery-co-1972
// Regola cromatica: fondo freddo e neutro, fasce concentriche di colori primari
// e secondari molto saturi; un clic genera una nuova variazione della palette.

const larghezzaCanvas = 800;
const altezzaCanvas = 600;
const numeroFasce = 13;
const dimensioneMassima = 560;
const spessoreContorno = 2;
const toniPrimari = [0, 55, 225];
const toniSecondari = [30, 130, 285];
const intervalloSaturazione = [78, 94];
const intervalloLuminosita = [40, 58];
const tonoSfondo = 210;
const saturazioneSfondo = 8;
const luminositaSfondo = 95;

let coloriFasce = [];

function setup() {
  createCanvas(larghezzaCanvas, altezzaCanvas);
  colorMode(HSL, 360, 100, 100);
  rectMode(CENTER);
  noLoop();
  generaColori();
}

function draw() {
  background(tonoSfondo, saturazioneSfondo, luminositaSfondo);

  const passo = dimensioneMassima / numeroFasce;

  stroke(0, 0, 97);
  strokeWeight(spessoreContorno);

  for (let i = 0; i < numeroFasce; i++) {
    const dimensione = dimensioneMassima - i * passo;

    fill(coloriFasce[i]);
    rect(width / 2, height / 2, dimensione, dimensione);
  }
}

function generaColori() {
  coloriFasce = [];

  const tonoInizio = random(toniPrimari);
  const tonoFine = random(toniSecondari);

  const satInizio = random(intervalloSaturazione[0], intervalloSaturazione[1]);
  const satFine = random(intervalloSaturazione[0], intervalloSaturazione[1]);

  const lumInizio = random(intervalloLuminosita[0], intervalloLuminosita[1]);
  const lumFine = random(intervalloLuminosita[0], intervalloLuminosita[1]);

  for (let i = 0; i < numeroFasce; i++) {
    const t = i / (numeroFasce - 1);

    const tono = lerp(tonoInizio, tonoFine, t);
    const saturazione = lerp(satInizio, satFine, t);
    const luminosita = lerp(lumInizio, lumFine, t);

    coloriFasce.push(color(tono, saturazione, luminosita));
  }
}

function mousePressed() {
  generaColori();
  redraw();
}