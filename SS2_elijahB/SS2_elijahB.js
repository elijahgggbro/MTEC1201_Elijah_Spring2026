/*Comments at the top of your sketch,
including:
Elijah B
Space Adventure (practice with variables/motion)


Space Adventure is a continuation of my first project. 
My goal for this project is to have an interactive
spinning earth that cycles through the landscape 
and changes with each rotation.
Picture a neighborhood in one rotation, then a forest,
etc. This instance is more of a practice
with motion, functions, and variables. 

Theme: Illusions, interaction with environment. 

Instructions: The ufo follows your mouse. Depending on the
Y axis of the ufo, the star speed will change.

Pressing the mouse will change the direction of the sun


In further instances, I plan on having a night and day cycle,
changing the gradient of the Earth. 


*/







let sunAngle=0;
let sunDirection=1;


let star1= 0;
let star2= 200;
let star3= 30;
let star4= 60;
let star5= 70;
let star6= 100;
let star7= 150;
let star8= 60;
let star9= 40;
let star10= 240;








function setup() {
	createCanvas(700, 700);
	
}




function draw() {

	background(10,95,200);


	
	//  ufo Y position changes star speed
	
	let starSpeed= mouseY * 0.02

	// ufo

	fill(0,10,0);
	ellipse(mouseX,mouseY,30,10);
	circle(mouseX,mouseY,15)

	

	

	// earth
	stroke(1);
	fill(14,203,50);
	circle(width /2,height /2,350);


	



	// stars

	noStroke();
	fill(256,256,256);
	circle(star1+= 3.0 + starSpeed,20,10);

	noStroke();
	fill(256,256,256);
	circle(star2+= 3.02+ starSpeed,70,10);

	noStroke();
	fill(256,256,256);
	circle(star3+= 4.2+ starSpeed,140,10);

	noStroke();
	fill(256,256,256);
	circle(star4+= 4.0+ starSpeed,240,10);

	noStroke();
	fill(256,256,256);
	circle(star5+= 4.0+ starSpeed,300,10);

	noStroke();
	fill(256,256,256);
	circle(star6+= 8.0+ starSpeed,370,10);

	noStroke();
	fill(256,256,256);
	circle(star7+= 5.02+ starSpeed,430,10);

	noStroke();
	fill(256,256,256);
	circle(star8+= 2.02+ starSpeed,540,10);
	noStroke();
	fill(256,256,256);
	circle(star9+= 7.2+ starSpeed,600,10);

	noStroke();
	fill(256,256,256);
	circle(star10+= 2.2+ starSpeed,670,10);

	
	// restarts star location if reaches border
	
	if(star1 > 700) star1=0;
	if(star2 > 700) star2=0;
	if(star3 > 700) star3=0;
	if(star4 > 700) star4=0;
	if(star5 > 700) star5=0;
	if(star6 > 700) star6=0;
	if(star7 > 700) star7=0;
	if(star8 > 700) star8=0;
	if(star9 > 700) star9=0;
	if(star10 > 700) star10=0;
	
		

	



	
	
	//sun rotating in orbit around center of canvas 
	
	translate(width /2, height/2);
	rotate(sunAngle);

	// sun design 
	fill(214,123,35);
	circle(300,0,90);
	

	//speed of rotation
	sunAngle += 0.02 * sunDirection;




	
}

function mousePressed(){

	/* changes rotation of sun if mouse pressed

	 multiplies sunDirectcion variable by -1. It is constantly rotating 
	 in the draw function, so flipping negative to positive when mouse
    pressed changes direction angle.

	*/

	
	sunDirection *= -1;
}