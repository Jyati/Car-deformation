var car, wall;
var carImage, wallImage;


var speed, weight;

function preload(){
	wallImage = loadImage("wall.png");

}

function setup() {
	createCanvas(1600, 400);
'['

	speed = random(55, 90)
	weight = random(400, 1500)


	car = createSprite(50, 200, 50, 50);
	car.velocityX = speed;
	car.debug = true;



	wall = createSprite(1500, 200, 60, height / 2)
	
	console.log(wall.x - car.x );
	console.log(car.width);
	console.log(wall.width);
}


function draw() {
	background("skyblue");

	if (wall.x - car.x < (car.width + wall.width) / 2) {
		car.velocityX = 0;
		var deformation = 0.5 * weight * speed * speed / 22500;
		if (deformation > 180) {
			car.shapeColor = color(255, 0, 0);
			fill(255, 0, 0);
			text("Speed: "+round(speed),1300,100);
			text("Deformation: "+"BAD",1300,130);
		}

		if (deformation < 180 && deformation > 100) {
			car.shapeColor = color(230, 230, 0);
			fill(230, 230, 0);
			text("Speed: "+round(speed),1300,100);
			text("Deformation: "+"AVERAGE",1300,130);
		}

		if (deformation < 100) {
			car.shapeColor = color(0, 255, 0);
			fill(0, 255, 0);
			text("Speed: "+round(speed),1300,130);
			text("Deformation: "+"GOOD",1300,150);
		}
	}

	drawSprites();

}