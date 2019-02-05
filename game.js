$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var sprites = [];
	var assetsToLoad = [];
	var assetsLoaded = 0;

	var goomba = new Goomba(context);
	var level = new Enviroment(context);
	var background = new Background(context);

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
				console.log("UP");
				pressUp = false;
				break;
			case 37:
			case 65:
				pressLeft = false;
				break;
			case 40:
			case 83:
				pressDown = false;
				break;
			case 39:
			case 68:
				pressRight = false;
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

		if (pressLeft && !pressRight) {
			if (test.x > context.canvas.width * 0) {
				test.x -= 5
			}
			else if (test.x < context.canvas.width * 0) {
				test.x = (context.canvas.width * 0 + 100);
			}
		}
		if (pressRight && !pressLeft) {
			if (test.x >= context.canvas.width * 0.49) {
				background.x -= 5;
				level.x -= 5;
				goomba.x -= 5;
			}
			else {
				test.x += 5;
			}
		}

		goomba.Update();
		//setTimeout(Update, 1000);
		Render();
	}

	function Render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		background.Render();
		level.Render();
		goomba.Render();
		test.Render();
	}
});