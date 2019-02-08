$(document).ready(function () {
	var canvas = $("#game");
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
				pressUp = true;
				break;
			case 37:
				pressLeft = true;
				break;
			case 40:
				pressDown = true;
				break;
			case 39:
				pressRight = true;
				break;
			case 90:
				pressA = true;
				break;
			case 88:
				pressB = true;
				break;
		}
	}, false);
	window.addEventListener("keyup", function (event) {
		switch (event.keyCode) {
			case 38:
				pressUp = false;
				break;
			case 37:
				pressLeft = false;
				background.vx = 0;
				break;
			case 40:
				pressDown = false;
				break;
			case 39:
				pressRight = false;
				background.vx = 0;
				break;
			case 90:
				pressA = false;
				break;
			case 88:
				pressB = false;
				break;
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
				else {
					mario.x += 4;
					if (pressRight && !pressLeft && pressB) {
						mario.x += 9;
					}
				}
			}
			if (pressUp && !pressDown) {
				mario.y -= 4;
			}
			if (pressDown && !pressUp) {
				mario.y += 4;
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

		//Collision with level
		for (var i = 0; i < brick.length; i++) {
			var collisionSide = new collision(mario, brick[i]);
			if (collisionSide === "bottom" && mario.vy >= 0) {
				//mario.isOnGround = true;
				//mario.vy = -mario.gravity;
				mario.vy = 0;
			} else if (collisionSide === "top" && mario.vx >= 0) {
				mario.vx = 1;
			} else if (collisionSide === "left" && mario.vx <= 0) {
				mario.vx = 0;
			} else if (collisionSide === "right" && mario.vx >= 0) {
				mario.vx = 0;
			}
			if (collisionSide !== "bottom" && mario.vy > 0) {
				mario.isOnGround = false;
			}
		} 


		//setTimeout(Update, 1000);
		background.Update();

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