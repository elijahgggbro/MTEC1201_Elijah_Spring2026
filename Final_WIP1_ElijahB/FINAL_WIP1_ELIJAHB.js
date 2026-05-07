

// This is my first Prototype of my final project: the Electronic
//  Loop Interface (or ELI). 
//  I wanted to experiment with creating a functional DAW in p5,
//  and got inspired by Sawtooth waves sounding like a swarm of bees.
//  This DAW will include an 8-bar drum sequencer, inspired
//  by the Linn-drum machine. The user will be able to program a drum
//  pattern, change tempo, and gain control. The rectangle in the corner
//  a work in progress Saw visiualizer that you will be able to interact 
//  with your mouse. I plan on adding an actual bee following the waves created.
//  Keyboard piano functionality will also later be implemented, as well as 
//  effect knobs.
//  These effect knobs will connect with each HoneyComb you will select, 
//  Adding customization to either the master track or the synth.
//  Nothing is functional currently, and the aesthetics are a work in progress.







//// add beepm    , visual saw wave with 
// bee flying, pause, 
// play, effect combs 
// drums similar to linn drum




let freq =0

function setup() {
	createCanvas(800, 800);

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
text("Version 1.0",width/2+10,115);




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




//sequencer



 // 1st beat top
 fill(234, 136, 29);	
 hexagon(200,348,25);

 // 5th beat top
 fill(234, 136, 29);
 hexagon(400,348,25);



	
 // 1st beat 2nd
 fill(234, 136, 29);	
 hexagon(175,390,25);

 // 5th beat 2nd
 fill(234, 136, 29);
 hexagon(375,390,25);


	
 // 1st beat 3rd
 fill(234, 136, 29);	
 hexagon(200,435,25);

 // 5th beat 3rdthst- thats a lot to read
 fill(234, 136, 29);
 hexagon(400,435,25);

	
 // 1st beat 4rd
 fill(234, 136, 29);	
 hexagon(175,478,25);

 // 5th beat 5TH
 fill(234, 136, 29);
 hexagon(375,478,25);







stroke(234, 146, 50);
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




// sawtooth visual	
fill(99, 58, 3,10);
stroke(234, 146, 50);
strokeWeight(5);
rect(width/2+150,height/2+150,200);	

fill(30);
textSize(19);
text("Synth (Saw)",width/2+250,height/2+130);



//BPM
stroke(234, 146, 50);
strokeWeight(5);
fill(30);
textSize(19);
text("BeePM: 140 ",125,260);

noFill();
stroke(0)
strokeWeight(2);
rect(135,240,50,30)



// key instructions
stroke(234, 146, 50,40);
fill(30,20);
textSize(19);
text("Keys Q-U: Accidental Notes ",650,20);
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