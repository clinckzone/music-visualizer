var bins;
var fft;
var mic;
var starfield;
var particleSystem;

function setup() {
  createCanvas(850, window.innerHeight);

  mic = new p5.AudioIn();
  mic.start();

  bins = pow(2, 10);
  fft = new p5.FFT(0.5, bins);
  fft.setInput(mic);

  starfield = new Starfield(200);
  particleSystem = new ParticleSystem(bins, fft);
}

function draw() {
  background(51);
  starfield.display();
  particleSystem.display();
}

function mousePressed() {
  getAudioContext().resume();
}