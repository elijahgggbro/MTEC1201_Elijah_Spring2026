

// Elijah B
// "Electronic Loop Interface"

// Features:
// Use the keyboard to play full octave synth.
// BPM Slider changes bpm from 100 - 200.
// Program 4 tracks of drums.












// bee synth


let sawOsc;

let bee

class beeClass {
  constructor(x,y) {
    this.x = x;
    this.y = y;

  }   draw() {
    // body
    stroke(0);
    strokeWeight(2);
    fill('yellow');
    ellipse(this.x, this.y, 30, 20);

    // stripes
    fill(0);
    rect(this.x - 3, this.y - 10, 1.7, 20);
    rect(this.x - 10, this.y - 9, 1, 17);
    rect(this.x + 5, this.y - 9, 1, 17);

    

    // wings
    stroke(100);
    fill (255,255,255,80);
    ellipse(this.x - 8, this.y - 12,16,18);

    stroke(100);
    fill (255,255,255,80);
    ellipse(this.x - 8, this.y - 12,16,18);

    
    stroke(100);
    fill (255,255,255,80);
    ellipse(this.x - 3, this.y - 12,16,18);

    // eye

    noStroke();
    fill(0);
    circle(this.x +10, this.y -3, 3);
 }
}




// displays note of synth
let noteDisplay = '';


let kick;
let snare;
let hihat;
let tom;

// timer
let currentBeat = 0;
let lastBeat = 0;
let beepm = 100;


// position of percussion honeycombs
let kickBeats = [
  {x: 200,  y: 346, active:false},
  {x: 250,  y: 346, active:false},
  {x: 300,  y: 346, active:false},
  {x: 350,  y: 346, active:false},
  {x: 400,  y: 346, active:false},
  {x: 450,  y: 346, active:false},
  {x: 500,  y: 346, active:false},
  {x: 550,  y: 346, active:false},

];

let snareBeats = [
  {x: 175,  y: 390, active:false},
  {x: 225,  y: 390, active:false},
  {x: 275,  y: 390, active:false},
  {x: 325,  y: 390, active:false},
  {x: 375,  y: 390, active:false},
  {x: 425,  y: 390, active:false},
  {x: 475,  y: 390, active:false},
  {x: 525,  y: 390, active:false},

];

let hihatBeats = [
  {x: 200,  y: 432, active:false},
  {x: 250,  y: 432, active:false},
  {x: 300,  y: 432, active:false},
  {x: 350,  y: 432, active:false},
  {x: 400,  y: 432, active:false},
  {x: 450,  y: 432, active:false},
  {x: 500,  y: 432, active:false},
  {x: 550,  y: 432, active:false},

];

let tomBeats = [
  {x: 175,  y: 476, active:false},
  {x: 225,  y: 476, active:false},
  {x: 275,  y: 476, active:false},
  {x: 325,  y: 476, active:false},
  {x: 375,  y: 476, active:false},
  {x: 425,  y: 476, active:false},
  {x: 475,  y: 476, active:false},
  {x: 525,  y: 476, active:false},

];


let beepmSlider; 





function preload() {
soundFormats('wav');
kick = loadSound("Sounds/kick.wav");
snare = loadSound("Sounds/snare.wav");
hihat = loadSound("Sounds/hihat.wav");
tom = loadSound("Sounds/tom.wav");
}








function setup() {
	createCanvas(800, 800);


  //bpm slider
  beepmSlider = createSlider(100,200,140);
  beepmSlider.position (60,280);
  beepmSlider.size(140);

 //osc     / saw sounds like bees humming
  sawOsc = new p5.Oscillator('sawtooth');
  sawOsc.start();
  sawOsc.amp(0); // initial volume (zero)

//  saw bee setup
  bee = new beeClass(width/2 + 250, 690);   
}



function mousePressed(){



  //  sequencer programming 

  // acativates each beat step in the array in an 8 beat loop
  for (let beat of kickBeats) {
    if (dist(mouseX,mouseY,beat.x,beat.y) < 25) {
      beat.active = !beat.active;
    }
  }

  for (let beat of snareBeats) {
    if (dist(mouseX,mouseY,beat.x,beat.y) < 25) {
      beat.active = !beat.active;
    }
  }

  for (let beat of hihatBeats) {
    if (dist(mouseX,mouseY,beat.x,beat.y) < 25) {
      beat.active = !beat.active;
    }
  }

  for (let beat of tomBeats) {
    if (dist(mouseX,mouseY,beat.x,beat.y) < 25) {
      beat.active = !beat.active;
    }
  }
}






function keyPressed() {


  // natural notes keys(A-K) full octave  // note display logic
  if (key === 'a') {sawOsc.freq(130); noteDisplay = 'C3'; bee.y = 735; } // C
  if (key === 's') {sawOsc.freq(145); noteDisplay = 'D'; bee.y = 705;  }// D
  if (key === 'd') {sawOsc.freq(164); noteDisplay = 'E'; bee.y = 675;  }// E 
  if (key === 'f') {sawOsc.freq(174); noteDisplay = 'F'; bee.y = 660;  }// F
  if (key === 'g') {sawOsc.freq(196); noteDisplay = 'G'; bee.y = 630;  }// G
  if (key === 'h') {sawOsc.freq(220); noteDisplay = 'A'; bee.y = 600;  }// A
  if (key === 'j') {sawOsc.freq(246); noteDisplay = 'B'; bee.y = 570 ; } // B
  if (key === 'k') {sawOsc.freq(261); noteDisplay = 'C4'; bee.y = 565;  }  // C

  //accidentals (Q-Y)
  if (key === 'q') {sawOsc.freq(138); noteDisplay = 'C#3'; bee.y = 720; } // C#
  if (key === 'w') {sawOsc.freq(155); noteDisplay = 'D#'; bee.y = 690;  } // D#
  if (key === 'e') {sawOsc.freq(185); noteDisplay = 'F#'; bee.y = 645;  } // F#
  if (key === 'r') {sawOsc.freq(207); noteDisplay = 'G#'; bee.y = 615;  } // G#
  if (key === 't') {sawOsc.freq(233); noteDisplay = 'A#'; bee.y = 585;  }// A#
  if (key === 'y') {sawOsc.freq(277); noteDisplay = 'C#4'; bee.y = 560; } // C#


  
  sawOsc.amp(0.3,0.01); // volume and amt of fade
}

function keyReleased() {
  
// note played
    noteDisplay = '';

//saw release
    sawOsc.amp(0,0.01); //0.1 fades out .1 seconds
  }
  




function draw() {

 noStroke();
fill(0);
textFont('Courier New', 10);
textWidth(100);
textSize(35);
textAlign(CENTER);
text("Electronic Loop Interface",width/2,90);
fill(100);
textSize(19);
text("Version 1.2",width/2+10,115);






// Honeycomb design credited to: https://editor.p5js.org/zapra/sketches/Hm43xfTxM	
  background(234, 172, 29,29);
  fill(234, 136, 29,20);
  //polygon(x, y, r)

  var space = 50; // x spacing
  var w = 25;

  for (var y = 0; y < 20; y++) {
    var py = y * space * sqrt(3) / 2; // y position
    for (var x = 0; x < 20; x++) {
      if (y % 2 == 0) hexagon(x * space, py, w, w);
      else hexagon(space / 2 + x * space, py, w, w);
    }
  }
////////////////////////////////////






// text displaying note played

fill(0,90);
textSize(25);
text(noteDisplay, width/2+176,height/2+193);





// sequencer logic

// sequencer moves one beat step at a time, based on the set beepm. 
// 1 minute (60,000ms) / bpm value / 2      =        dividing by two makes each base step an 8th note
//                                                   I tried multiple configurations and this sounds the best imo

// beat step advances after enough time elapsed since previous beat, checking with drums are active
// 

                // 1 minute is 60000 milliseconds
let beatInterval = 60000 / beepmSlider.value() / 2; // ms between each step
if (millis() - lastBeat > beatInterval) { // time past since last beat
  lastBeat = millis(); // reset timer




  if (kickBeats[currentBeat].active) kick.play();
  if (snareBeats[currentBeat].active) snare.play();
  if (hihatBeats[currentBeat].active) hihat.play();
  if (tomBeats[currentBeat].active) tom.play();



  currentBeat = currentBeat + 1;
  if (currentBeat === 8) currentBeat = 0;  // loops,  restarts after 8th beat
}







//sequencer

//kick
for (let beatPosition = 0; beatPosition < kickBeats.length; beatPosition++) { // sequences through all 8 beat steps
  let beat = kickBeats[beatPosition]
  if (beatPosition === currentBeat) fill (234, 169, 0); 

  else if (beat.active) fill (234, 136, 29); // color of sequencer passing

  else fill(234, 136, 29,26);  // active

  hexagon(beat.x,beat.y,25);  // inactive
}


//snare
for (let beatPosition = 0; beatPosition < snareBeats.length; beatPosition++) { // sequences through all beat steps
  let beat = snareBeats[beatPosition]
  if (beatPosition === currentBeat) fill (234, 169, 0); 

  else if (beat.active) fill (234, 136, 29);

  else fill(234, 136, 29,26);

  hexagon(beat.x,beat.y,25);
}



//hihat
for (let beatPosition = 0; beatPosition < hihatBeats.length; beatPosition++) { // sequences through all beat steps
  let beat = hihatBeats[beatPosition]
  if (beatPosition === currentBeat) fill (234, 169, 0); 

  else if (beat.active) fill (234, 136, 29);

  else fill(234, 136, 29,26);

  hexagon(beat.x,beat.y,25);
}


//tom
for (let beatPosition = 0; beatPosition < tomBeats.length; beatPosition++) { // sequences through all beat steps
  let beat = tomBeats[beatPosition]
  if (beatPosition === currentBeat) fill (234, 169, 0); // passing

  else if (beat.active) fill (234, 136, 29); //  steps active

  else fill(234, 136, 29,26); // inactive

  hexagon(beat.x,beat.y,25);
  
}












stroke(245, 193, 30,50);
strokeWeight(5);
fill(30);
textSize(19);
text("Kick",135,348);

	
fill(30);
textSize(19);
text("Snare",110,390);


fill(30);
textSize(19);
text("Hi-Hat",130,435);	

	
fill(30);
textSize(19);
text("Tom",115,478);






// sawtooth visual	featuring the bee
fill(99, 58, 3,10);
stroke(245, 193, 30,50);
strokeWeight(5);
rect(width/2+150,height/2+150,200);	

fill(30);
textSize(19);
text("Synth",width/2+250,height/2+130);


bee.draw();




//BeePM
stroke(245, 193, 30,50);
strokeWeight(5);
fill(30);
textSize(19);
text("BeePM: "+  beepmSlider.value(),125,260);
noFill();
stroke(245, 193, 30,50)
strokeWeight(2);
rect(135,240,60,30)





stroke(234, 146, 50,40);
fill(30,20);
textSize(19);
text("Save The Bees ",150,740);




// key instructions
stroke(234, 146, 50,40);
fill(30,20);
textSize(19);
text("Keys Q-Y: Accidental Notes ",650,20);
text("Keys A-K: Natural Notes ",150,20);	
}









///////////////////////////////////

function hexagon(x, y, radius) {
  
  noStroke();
  angleMode(DEGREES);
  beginShape();
  for (let a = 30; a < 390; a += 60) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);

///////////////////////////////////////////////////////////////////////////////////////////



	
}


