$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var sprites = [];
	var assetsToLoad = [];
	var assetsLoaded = 0;
	var Goombas = [];
	Goombas.push(new Goomba(context, 0, 600 - 48));

	for (var i = 0; i < 1; i++) {
		Goombas.push(new Goomba(context,840, 480));
		Goombas[i].image.src = Goombas[i].source;
	}

	var level = new Enviroment(context);

	var goomba = new Goomba(context);

	var background = new Background(context);

	//Render Floor
	var floor = [];
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

	//Render Stairs
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

	//Render breakable bricks
	var brick = [];
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

	//Render Question boxes
	var box = [];
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

	var test = new testObject(context);

	var TITLE = 0;
	var LOADING = 1;
	var PLAYING = 2;
	var GAMEOVER = 3;

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

	function loadHandler() {
		assetsLoaded++;
		if (assetsLoaded == assetsToLoad.length) {
			//gameState = PLAYING;
		}
	}

	Update();

	function Update() {
		requestAnimationFrame(Update, canvas);

		if (background.x <= -7520) {
			background.x = -7520;
		}
		else {
			if (pressLeft && !pressRight) {
				if (test.x > context.canvas.width * 0) {
					test.x -= 10;
				}
				else if (test.x < context.canvas.width * 0) {
					test.x = (context.canvas.width * 0);
				}
			}
			if (pressRight && !pressLeft) {
				if (test.x >= context.canvas.width * 0.49) {
					background.vx = -10;
					goomba.x -= 10;
				}
				else {
					test.x += 10;
				}
			}
			for (var i = 0; i < floor.length; i++) {
				floor[i].Update(background.vx);
			}
			for (var i = 0; i < brick.length; i++) {
				brick[i].Update(background.vx);
			}
			for (var i = 0; i < box.length; i++) {
				box[i].Update(background.vx);
			}
		}



		goomba.Update();
		//setTimeout(Update, 1000);


		background.Update();

		goomba.Update();

		Render();
		
	}

	function Render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		background.Render();
		goomba.Render();
		for (var i = 0; i < floor.length; i++) {
			floor[i].Render();
		}
		for (var i = 0; i < brick.length; i++) {
			brick[i].Render();
		}
		for (var i = 0; i < box.length; i++) {
			box[i].Render();
		}
		test.Render();
	}
});