//coded with help from promoting chatGPT
//song used: Res90 by Bonebrokk 

var song; 
var analyzer, volume;
var t = 0;
let r = 2 + 7 * cos(2 * t + volume * 10);


function preload(){
  song=loadSound ("data/music.mp3");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
    noStroke()
  getAudioContext().suspend();
  analyzer= new p5.Amplitude();
  
}

function draw() {
  background(0,10);
  translate(width / 2, height / 2);

  volume = analyzer.getLevel();
  let mappedVol = map(volume, 0, 1.0, 10, 100);

  // Make the equation reactive to volume
  let r = (2 + 7 * cos(2 * t)) * (1 + volume * 5);

  let x = r * 20 * cos(t);
  let y = r * 20 * sin(t);

  fill(255, 0, 0);
  ellipse(x, y, mappedVol, mappedVol);
  ellipse(-x, -y, mappedVol, mappedVol);
  ellipse(y, x, mappedVol, mappedVol);
  ellipse(-y, -x, mappedVol, mappedVol);

  t += 0.02;
}

function mousePressed() {
  userStartAudio();
  song.play();
}
