// Elijah B
// Jackson Pollock Generator

// Left sliders control cosine waves and Red/Blue Color
// Right sliders control Tangent waves and Red/Blue Color
// Press R at any time to reset





function setup() {
	createCanvas(700, 700);
	background(255);



	strokeWeight(3);




  

	
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

   if(key === 'r','r'){
	background(255);
	   
   }
	
}







	function draw() {

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

fill(180);
textSize(9);
text("Press R to reset.",width/2,690);









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