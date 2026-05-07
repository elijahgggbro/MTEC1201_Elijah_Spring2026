//Elijah B
// Jackson Pollock Generator V2

// Left sliders control Cosine waves/color
// Right sliders control Tangent waves/color

// press R to reset at any time

// Buttons added to sell art, as well as an art critique button. Horde as much wealth as you can(theres no way to spend it)






// sell button logic
  let buttonX
  let buttonY
  let buttonR


  // array of prices
  let price = [2500,6000,10000,20000,1000000]
  let wallet = 0;








// Review button logic


  let heartX = 540;
  let heartY =650;
  let heartR =27;
  // array of critique
  let review = ["Polarizing","Revolutionary","Moving", "Raw", "Deep",
    "Odd Defying", "Spectacular", "Take my Money", "A Tale of War",
    "I don't get it...", "Alive", "Breath-Taking"
 
  ]

 let critique = "";

 // views

  let views = [];




function setup() {
	createCanvas(700, 700);
	background(255);



	strokeWeight(3);


 buttonX = 200
 buttonY =650
 buttonR =27




  

	
  // slider 1 setup	
  
	
  slider = createSlider(100, 255);
  slider.position(22, 650);
  slider.size(70);
  slider.style('transform','rotate(90deg)');

 
  

	
  // slider 2 setup	
  
	
  slider2 = createSlider(0, 255);
  slider2.position(72, 650);
  slider2.size(70);
  slider2.style('transform','rotate(90deg)');

	


	// slider 3 setup
	
	
	slider3 = createSlider(0, 255);
   slider3.position(572, 650);
   slider3.size(70);
   slider3.style('transform','rotate(90deg)');


	






	// slider 4 setup
	
	
	slider4 = createSlider(0, 255);
	slider4.position(622, 650);
   slider4.size(70);
   slider4.style('transform','rotate(90deg)');



	



	
	
}






// press r to reset
function keyPressed() {

   if(key === 'r'|| key === 'R'){
	background(255);
	wallet=0
  critique= "";
  views=[]
   }
	
}


function mousePressed() {

	
	let buttonHover = dist(mouseX, mouseY, buttonX, buttonY) < buttonR;

  if (buttonHover) {
    wallet += price[int(random(price.length))];
  }

let heartHover = dist(mouseX, mouseY, heartX, heartY) < heartR; 

  if (heartHover) {
    critique = review[int(random(review.length))];
    views.push(int(random(301,40000)));
  }


}


function draw(){




// critique button





// critique button sensor logic

	let heartHover = dist(mouseX, mouseY, heartX, heartY) < heartR; 

	if (mouseIsPressed && heartHover) {
		
		fill (240,20,20);  // clicked
		
	} else if (heartHover){

	
		fill(200,20,20);  // hovered
		
	} else{
		
		fill (220,20,20);  // start
		
}





// Credits to: https://editor.p5js.org/monicamonin/sketches/hWHc3EuFh
// Heart shape and comments from user: Monicamonin

stroke(0);
  strokeWeight(3);
  push();
  translate(width / 2+190, 637)

  //if you want to draw it larger or smaller you can use
  //the scale() transform, we haven't covered it in class
  //but it is easier than re-drawing the bezier curves
  //the heart also isn't perfect as it is two shapes
  //rather than a complete one, so a line might sometimes appear
  //in the centre of the shape
  //scale the heart * 2
  scale(1.3)
  //draw heart
  beginShape();
  vertex(0, 0);
  bezierVertex(0, -20, 40, -10, 0, 25);
  vertex(0, 0);
  bezierVertex(0, -20, -40, -10, 0, 25);
  endShape();
  //end draw heart
  
  pop();


//////////////////
  
  stroke(0);
  strokeWeight(0);
  push();
  translate(width / 2+190, 637)

  
  scale(1.3)
 
  beginShape();
  vertex(0, 0);
  bezierVertex(0, -20, 40, -10, 0, 25);
  vertex(0, 0);
  bezierVertex(0, -20, -40, -10, 0, 25);
  endShape();
 
  
  pop();


noStroke();
fill(100);
textFont('Courier New', 10);
textWidth(100);
textSize(12);
textAlign(CENTER);
text("Critique",540,615);











  
// sell button sensor logic

	let buttonHover = dist(mouseX, mouseY, buttonX, buttonY) < buttonR; 

	if (mouseIsPressed && buttonHover) {
		
		fill ('hsb(120, 80%, 100%)');  // clicked   values copied from color() tutorial on p5
		
	} else if (buttonHover){

	
		fill('hsb(120, 80%, 40%)');  // hovered
		
	} else{
		
		fill ('hsb(150, 100%, 50%)');  // start
		
}

//sell button

stroke(40);
strokeWeight(2)
circle(200,650,55);


noStroke();
fill(100);
textFont('Courier New', 10);
textWidth(100);
textSize(12);
textAlign(CENTER);
text("Sell Artwork",200,615);

noStroke();
fill('hsb(150, 75%, 80%)');
textFont('Courier New', 10);
textWidth(100);
textSize(20);
textAlign(CENTER);
text("$",200,655);










//center text

noStroke();
fill(0);
textFont('Courier New', 10);
textWidth(100);
textSize(15);
textAlign(CENTER);
text("Jackson Pollock",width/2,620);
fill(100);
textSize(13);
text("Generator",width/2,635);


fill(0);
textSize(40);
text("2.0",width/2+109,635);


fill(250,20,0);
textSize(40);
text("2.0",width/2+110,635);




fill(180);
textSize(9);
text("Press R to reset.",width/2,690);









// Wallet counter




fill(256);
rect(width/2+40,673,180,20);

noStroke();
fill(70);
textFont('Courier New', 10);
textWidth(100);
textSize(10);
textAlign(CENTER);
text("Wallet: $" + wallet, width/2+110,690);









// review text

fill(255);
rect(width/2-69,645,200,36);

noStroke();
fill(250,20,0);
textFont('Courier New', 10);
textWidth(100);
textSize(10);
textAlign(CENTER);
text(critique,width/2,658)


if (views.length > 0){
text(views[views.length -1 ] + " People Watching",width/2,677);

}









//left


//text

 
noStroke();
fill(100);
textFont('Courier New', 10);
textWidth(100);
textSize(12);
textAlign(CENTER);
text("Cosine",85,615);



// freq and color text
push();
noStroke();
fill(100);
textFont('Courier New', 10);
textWidth(100);
textSize(12);
textAlign(CENTER);
translate(47,656);
rotate(-1.57);
text("Frequency",0,0);
pop();


// freq and color text
push();
noStroke();
fill(100);
textFont('Courier New', 10);
textWidth(100);
textSize(12);
textAlign(CENTER);
translate(101,640)
rotate(-1.57);
text("Color",0,0);
pop();





///////////////// slider 1 ///////////////



	
// opacity of slider 1
	stroke(0, 0, 0, 80);
  strokeWeight(2);


//   value of slider 1	  (frequency 1,,, higher value=more detail)
	let freq1 = slider.value();


// sine wave logic, y1 = height of cos waves
	for(let x1 = 0; x1 < width; x1++ ){
	
	
	let y1 = 300 + cos(x1 * freq1 * 0.03) * 250;

	//draw if above divider line	
	if (y1 < 600) point(x1,y1);
	


}

	
////////////// slider 2/  color ////////////////

	
	let color1 = slider2.value(); 
	let x2=0;

	while(x2<width){

	  let y2 = 300 + cos(x2 * color1 * 0.03) * 250;
	  stroke(color1, 0, 255 - color1, 150);
	  if (y2 < 600) point(x2,y2);
	  x2++;
		
}
	






//right






//text
fill(120);
noStroke();
textWidth(100);
textSize(12);
textAlign(CENTER);
text("Tangent",635,615);




// freq and color text
push();
noStroke();
fill(100);
textFont('Courier New', 10);
textWidth(100);
textSize(12);
textAlign(CENTER);
translate(597,656);
rotate(-1.57);
text("Frequency",0,0);
pop();


// freq and color text
push();
noStroke();
fill(100);
textFont('Courier New', 10);
textWidth(100);
textSize(12);
textAlign(CENTER);
translate(649,640);
rotate(-1.57);
text("Color",0,0);
pop();












////////// slider 3 ///////////
//   value of slider 3	  (frequency 2)
	stroke(0, 0, 0, 50);
	let freq2 = slider3.value();


// sine wave logic, y3 = height of tan waves
	for(let x3= 0; x3 < width; x3++ ){	
	let y3 = 300 + tan(x3 * freq2 * 0.1) * 100;
	if (y3 < 600) point(x3, y3);
	


}
	
	
	
///////////slider 4/  color ////////////////////////
	
	let color2 = slider4.value();


	let x4=0; 
	while(x4<width){
	stroke(color2, 0, 255 - color2, 150);
	let y4 = 300 + tan(x4 * color2 * 0.001) * 100;
	if (y4 < 600) point(x4,y4);
	x4++;
	
}



	// divider line	
	stroke(0);
	strokeWeight(4);
	line(0, 600, width, 600);
	



  // frame
  noFill();
  strokeWeight(8);
  rect(0,0,width,height);


}
