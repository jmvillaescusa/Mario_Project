$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var background = new Background(context);
	var mario = new Mario(context, 100, 480);

	var Goombas = [];
	var Koopas = [];
	
	for (var i = 0; i < 1; i++) {
		Koopas.push(new Koopa(context, 4280, 480));
		//Koopas[i].image.src = Koopas[i].source;
	}

	for (var i = 0; i < 1; i++) {
		Goombas.push(new Goomba(context, 800, 480));
		//Goombas[i].image.src = Goombas[i].source;
	}

	//Render Floor
	var floor = [];
	for (var o = 0; o < 1; o++) {
		for (var i = 0; i < 69; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40, 520));
		}
		for (var i = 0; i < 69; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40, 560));
		}
		for (var i = 0; i < 15; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40 + 2840, 520));
		}
		for (var i = 0; i < 15; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40 + 2840, 560));
		}
		for (var i = 0; i < 64; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40 + 3560, 520));
		}
		for (var i = 0; i < 64; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40 + 3560, 560));
		}
		for (var i = 0; i < 69; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40 + 6200, 520));
		}
		for (var i = 0; i < 69; i++) {
			floor.push(new Enviroment(context, 0, 0, i * 40 + 6200, 560));
		}
	}

	//Render Stairs
	for (var o = 0; o < 1; o++) {
		for (var i = 0; i < 4; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 6200, 480));
		}
		for (var i = 0; i < 3; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 6200, 440));
		}
		for (var i = 0; i < 2; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 6200, 400));
		}
		for (var i = 0; i < 1; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 6200, 360));
		}
		for (var i = 0; i < 5; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5920, 480));
		}
		for (var i = 0; i < 4; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5960, 440));
		}
		for (var i = 0; i < 3; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 6000, 400));
		}
		for (var i = 0; i < 2; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 6040, 360));
		}
		for (var i = 0; i < 4; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5600, 480));
		}
		for (var i = 0; i < 3; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5600, 440));
		}
		for (var i = 0; i < 2; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5600, 400));
		}
		for (var i = 0; i < 1; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5600, 360));
		}
		for (var i = 0; i < 4; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5360, 480));
		}
		for (var i = 0; i < 3; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5400, 440));
		}
		for (var i = 0; i < 2; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5440, 400));
		}
		for (var i = 0; i < 1; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 5480, 360));
		}
		for (var i = 0; i < 9; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7240, 480));
		}
		for (var i = 0; i < 8; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7280, 440));
		}
		for (var i = 0; i < 7; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7320, 400));
		}
		for (var i = 0; i < 6; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7360, 360));
		}
		for (var i = 0; i < 5; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7400, 320));
		}
		for (var i = 0; i < 4; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7440, 280));
		}
		for (var i = 0; i < 3; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7480, 240));
		}
		for (var i = 0; i < 2; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7520, 200));
		}
		for (var i = 0; i < 1; i++) {
			floor.push(new Enviroment(context, 0, 16, i * 40 + 7920, 480));
		}
	}

	//Render breakable bricks
	var brick = [];
	for (var o = 0; o < 1; o++) {
		for (var i = 0; i < 3; i++) {
			brick.push(new Enviroment(context, 16, 0, 800 + i * 80, 360));
		}
		for (var i = 0; i < 2; i++) {
			brick.push(new Enviroment(context, 16, 0, 3080 + i * 80, 360));
		}
		for (var i = 0; i < 8; i++) {
			brick.push(new Enviroment(context, 16, 0, 3200 + i * 40, 200));
		}
		for (var i = 0; i < 3; i++) {
			brick.push(new Enviroment(context, 16, 0, 3640 + i * 40, 200));
		}
		for (var i = 0; i < 1; i++) {
			brick.push(new Enviroment(context, 16, 0, 3760, 360));
		}
		for (var i = 0; i < 2; i++) {
			brick.push(new Enviroment(context, 16, 0, 3960 + i * 40, 360));
		}
		for (var i = 0; i < 1; i++) {
			brick.push(new Enviroment(context, 16, 0, 4720, 360));
		}
		for (var i = 0; i < 3; i++) {
			brick.push(new Enviroment(context, 16, 0, 4840 + i * 40, 200));
		}
		for (var i = 0; i < 2; i++) {
			brick.push(new Enviroment(context, 16, 0, 5120 + i * 120, 200));
		}
		for (var i = 0; i < 2; i++) {
			brick.push(new Enviroment(context, 16, 0, 5160 + i * 40, 360));
		}
		for (var i = 0; i < 2; i++) {
			brick.push(new Enviroment(context, 16, 0, 6720 + i * 40, 360));
		}
		for (var i = 0; i < 1; i++) {
			brick.push(new Enviroment(context, 16, 0, 6840, 360));
		}
	}

	//Render Question boxes
	var box = [];
	for (var o = 0; o < 1; o++) {
		for (var i = 0; i < 1; i++) {
			box.push(new Enviroment(context, 384, 0, 640, 360));
		}
		for (var i = 0; i < 2; i++) {
			box.push(new Enviroment(context, 384, 0, 840 + i * 80, 360));
		}
		for (var i = 0; i < 1; i++) {
			box.push(new Enviroment(context, 384, 0, 880, 200));
		}
		for (var i = 0; i < 1; i++) {
			box.push(new Enviroment(context, 384, 0, 3120, 360));
		}
		for (var i = 0; i < 1; i++) {
			box.push(new Enviroment(context, 384, 0, 3760, 200));
		}
		for (var i = 0; i < 3; i++) {
			box.push(new Enviroment(context, 384, 0, 4240 + i * 120, 360));
		}
		for (var i = 0; i < 3; i++) {
			box.push(new Enviroment(context, 384, 0, 4360, 200));
		}
		for (var i = 0; i < 2; i++) {
			box.push(new Enviroment(context, 384, 0, 5160 + i * 40, 200));
		}
		for (var i = 0; i < 1; i++) {
			box.push(new Enviroment(context, 384, 0, 6800, 360));
		}
	}

	//Render Pipes
	var pipe = [];
	for (var o = 0; o < 1; o++) {
		for (var i = 0; i < 1; i++) {
			j = 40;
			pipe.push(new Enviroment(context, 0, 128, 0 + j * 28, 0 + j * 11));
			pipe.push(new Enviroment(context, 16, 128, 40 + j * 28, 0 + j * 11));
			pipe.push(new Enviroment(context, 0, 144, 0 + j * 28, 40 + j * 11));
			pipe.push(new Enviroment(context, 16, 144, 40 + j * 28, 40 + j * 11));
		}
		for (var i = 0; i < 1; i++) {
			j = 40;
			pipe.push(new Enviroment(context, 0, 128, 0 + j * 38, 0 + j * 10));
			pipe.push(new Enviroment(context, 16, 128, 40 + j * 38, 0 + j * 10));
			pipe.push(new Enviroment(context, 0, 144, 0 + j * 38, 40 + j * 10));
			pipe.push(new Enviroment(context, 16, 144, 40 + j * 38, 40 + j * 10));
			pipe.push(new Enviroment(context, 0, 145, 0 + j * 38, 80 + j * 10));
			pipe.push(new Enviroment(context, 16, 145, 40 + j * 38, 80 + j * 10));
		}
		for (var i = 0; i < 1; i++) {
			j = 40;
			pipe.push(new Enviroment(context, 0, 128, 0 + j * 46, 0 + j * 9));
			pipe.push(new Enviroment(context, 16, 128, 40 + j * 46, 0 + j * 9));
			pipe.push(new Enviroment(context, 0, 144, 0 + j * 46, 40 + j * 9));
			pipe.push(new Enviroment(context, 16, 144, 40 + j * 46, 40 + j * 9));
			pipe.push(new Enviroment(context, 0, 145, 0 + j * 46, 80 + j * 9));
			pipe.push(new Enviroment(context, 16, 145, 40 + j * 46, 80 + j * 9));
			pipe.push(new Enviroment(context, 0, 145, 0 + j * 46, 120 + j * 9));
			pipe.push(new Enviroment(context, 16, 145, 40 + j * 46, 120 + j * 9));
		}
		for (var i = 0; i < 1; i++) {
			j = 40;
			pipe.push(new Enviroment(context, 0, 128, 0 + j * 57, 0 + j * 9));
			pipe.push(new Enviroment(context, 16, 128, 40 + j * 57, 0 + j * 9));
			pipe.push(new Enviroment(context, 0, 144, 0 + j * 57, 40 + j * 9));
			pipe.push(new Enviroment(context, 16, 144, 40 + j * 57, 40 + j * 9));
			pipe.push(new Enviroment(context, 0, 145, 0 + j * 57, 80 + j * 9));
			pipe.push(new Enviroment(context, 16, 145, 40 + j * 57, 80 + j * 9));
			pipe.push(new Enviroment(context, 0, 145, 0 + j * 57, 120 + j * 9));
			pipe.push(new Enviroment(context, 16, 145, 40 + j * 57, 120 + j * 9));
		}
		for (var i = 0; i < 1; i++) {
			j = 40;
			pipe.push(new Enviroment(context, 0, 128, 0 + j * 163, 0 + j * 11));
			pipe.push(new Enviroment(context, 16, 128, 40 + j * 163, 0 + j * 11));
			pipe.push(new Enviroment(context, 0, 144, 0 + j * 163, 40 + j * 11));
			pipe.push(new Enviroment(context, 16, 144, 40 + j * 163, 40 + j * 11));
		}
		for (var i = 0; i < 1; i++) {
			j = 40;
			pipe.push(new Enviroment(context, 0, 128, 0 + j * 179, 0 + j * 11));
			pipe.push(new Enviroment(context, 16, 128, 40 + j * 179, 0 + j * 11));
			pipe.push(new Enviroment(context, 0, 144, 0 + j * 179, 40 + j * 11));
			pipe.push(new Enviroment(context, 16, 144, 40 + j * 179, 40 + j * 11));
		}
	}

	//Render Items
	var items = [];
	for (var o = 0; o < 1; o++) {
		//Mushroom or Fire Flower
		items.push(new powerUp(context, 0, 0, 0 + 40 * 21, 0 + 40 * 9));
		items.push(new powerUp(context, 0, 0, 0 + 40 * 78, 0 + 40 * 9));
		items.push(new powerUp(context, 0, 0, 0 + 40 * 109, 0 + 40 * 5));

		//Super Star
		items.push(new powerUp(context, 0, 48, 0 + 40 * 100, 0 + 40 * 9));

		//Bundle of Coins
		items.push(new powerUp(context, 0, 97, 0 + 40 * 94, 0 + 40 * 9));
	}

	//Controll scheme and booleans
	var pressUp = false;
	var pressLeft = false;
	var pressDown = false;
	var pressRight = false;
	var pressA = false;
	var pressB = false;
	var pressStart = false;
	window.addEventListener("keydown", function (event) {
		switch (event.keyCode) {
			case 38:
			case 87:
				pressUp = true;
				break;
			case 37:
			case 65:
				pressLeft = true;
				break;
			case 40:
			case 83:
				pressDown = true;
				break;
			case 39:
			case 68:
				pressRight = true;
				break;
			case 90:
			case 76:
				pressA = true;
				break;
			case 88:
			case 75:
				pressB = true;
				break;
			case 72:
				pressStart = true;
		}
	}, false);
	window.addEventListener("keyup", function (event) {
		switch (event.keyCode) {
			case 38:
			case 87:
				pressUp = false;
				break;
			case 37:
			case 65:
				pressLeft = false;
				background.vx = 0;
				break;
			case 40:
			case 83:
				pressDown = false;
				break;
			case 39:
			case 68:
				pressRight = false;
				background.vx = 0;
				break;
			case 90:
			case 76:
				pressA = false;
				break;
			case 88:
			case 75:
				pressB = false;
				break;
			case 72:
				pressStart = false;
		}
	}, false);

	Update();

	function Update() {
		requestAnimationFrame(Update, canvas);

		//If it reaches flagpole, level ends
		if (background.x <= -7600) {
			background.x = -7600;
		}
		//Mario's Movement
		else {
			if (pressLeft && !pressRight) {
				if (mario.x > context.canvas.width * 0) {
					mario.x -= 4;
				}
				else if (mario.x < context.canvas.width * 0) {
					mario.x = (context.canvas.width * 0);
				}
				if (pressLeft && !pressRight && pressB) {
					mario.x -= 8; 
				}
			}
			if (pressRight && !pressLeft) {
				if (mario.x >= context.canvas.width * 0.49) {
					background.vx = -4;
					if (pressB) {
						background.vx = -9;
					}
                }
               /*mario.vx += mario.accelerationX;
                mario.vy += mario.accelerationY;

                mario.vx *= mario.frictoin;

                mario.vy += mario.gravity;

                if (mario.vx > mario.speedLimit) {
                    mario.vx = mario.speedLimit;
                }

                if (mario.vx < -mario.speedLimit) {
                    mario.vx = -mario.speedLimit;
                }

                if (mario.vy > mario.speedlimit) {
                    mario.vy = mario.speedLimit;
                }

                if (mario.vy < -mario.speedLimit) {
                    mario.vy = -mario.speedLimit;
                }

                if (pressUp && !pressDown) {
                    mario.accelerationY = -0.2;
                    mario.gravity = 0;
                    mario.friction = 1;
                }

                if (!pressUp && !pressDown && !pressLeft && !pressRight) {
                    mario.friction = 0.96;
                    mario.gravity = 0.3;
                }

                if (mario.vx > speedLimit) {
                    mario.vx = mario.speedLimit;
                }

                if (mario.vx < -mario.speedLimit) {
                    mario.vx = -mario.speedLimit;
                }

                if (mario.vy > mario.speedLimit * 2) {
                    mario.vy = cat.speedLimit * 2;
                }

                if (mario.vy < -mario.speedLimit) {
                    mario.vy = -mario.speedLimit;
                }

                if (mario.y + mario.height > canvas.height) {
                    mario.y = canvas.height - mario.height;
                    mario.isOnGround = true;
                    mario.vy = - cat.gravity;
                }

                if (pressUp && mario.isOnGround) {
                    mario.vy += mario.jumpForce;
                    mario.isOnGround = false;
                    mario.friction = 1;
                }

                if (mario.vx > mario.speedLimit) {
                    mario.vx = mario.speedLimit;
                }

                if (mario.vx < -mario.speedLimit) {
                    mario.vx = -mario.speedLimit;
                }

                if (mario.vy > mario.speedLimit * 2) {
                    mario.vy = mario.speedLimit * 2;
                }

                if (mario.isOnGround) {
                    mario.vx *= mario.friction;
                }*/


				else {
					mario.x += 4;
					if (pressRight && !pressLeft && pressB) {
						mario.x += 9;
					}
				}
			}
			//Updating sprites as backgroung scrolls
			for (var i = 0; i < floor.length; i++) {
				floor[i].Update(background.vx);
			}
			for (var i = 0; i < brick.length; i++) {
				brick[i].Update(background.vx);
			}
			for (var i = 0; i < box.length; i++) {
				box[i].Update(background.vx);
			}
			for (var i = 0; i < Goombas.length; i++) {
				Goombas[i].Update(background.vx);
			}
			for (var i = 0; i < pipe.length; i++) {
				pipe[i].Update(background.vx);
			}
			for (var i = 0; i < Koopas.length; i++) {
				Koopas[i].Update(background.vx);
			}
			for (var i = 0; i < items.length; i++) {
				items[i].Update(background.vx);
			}

		}

		//setTimeout(Update, 1000);
		background.Update();


		function collisionSide(mario, r2) {

		} 

		//Make the Goomba move
		Goombas[0].x--;

		//Make the koopa move
		Koopas[0].x--;


		Render();
	}

	function Render() {
		background.Render();

		for (var i = 0; i < floor.length; i++) {
			floor[i].Render();
		}
		for (var i = 0; i < brick.length; i++) {
			brick[i].Render();
		}
		for (var i = 0; i < box.length; i++) {
			box[i].Render();
		}
		for (var i = 0; i < Goombas.length; i++) {
			Goombas[i].Render();
		}
		for (var i = 0; i < pipe.length; i++) {
			pipe[i].Render();
		}
		for (var i = 0; i < Goombas.length; i++) {
			Goombas[i].Render();
		}
		for (var i = 0; i < Koopas.length; i++) {
			Koopas[i].Render();
		}
		for (var i = 0; i < items.length; i++) {
			items[i].Render();
		}


		mario.Render();
	}
});