$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var sprites = [];
	var assetsToLoad = [];
	var assetsLoaded = 0;


	var goomba = new Goomba(context, 0, 600 -48);
	var level = new Enviroment(context);
	var background = new Background(context);


	var TITLE = 0;
	var LOADING = 1;
	var PLAYING = 2;
	var GAMEOVER = 3;

	                //Keypads
	var UP = 87;    //W
	var LEFT = 65;  //A 
	var DOWN = 83;  //S   
	var RIGHT = 68; //D
	var A = 76;     //L
	var B = 75;     //K
	var START = 72; //H   

	var pressUp = false;
	var pressLeft = false;
	var pressDown = false;
	var pressRight = false;
	var pressA = false;
	var pressB = false;
	var pressStart = false;

	window.addEventListener("keydown", function (event) {
		switch (event.keyCode) {
			case UP:
				pressUp = true;
				break;
			case LEFT:
				pressLeft = true;
				break;
			case DOWN:
				pressDown = true;
				break;
			case RIGHT:
				pressRight = true;
				break;
			case A:
				pressA = true;
				break;
			case B:
				pressB = true;
				break;
			case START:
				pressStart = true;
		}
	}, false);

	window.addEventListener("keyup", function (event) {
		switch (event.keyCode) {
			case UP:
				console.log("UP");
				pressUp = false;
				break;
			case LEFT:
				pressLeft = false;
				break;
			case DOWN:
				pressDown = false;
				break;
			case RIGHT:
				pressRight = false;
				break;
			case A:
				pressA = false;
				break;
			case B:
				pressB = false;
				break;
			case START:
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
			if (goomba.x > context.canvas.width * 0) {
				goomba.x -= 5
			}
			else if (goomba.x < context.canvas.width * 0) {
				goomba.x = (context.canvas.width * 0 + 100);
			}
		}
		if (pressRight && !pressLeft) {
			if (goomba.x >= context.canvas.width * 0.49) {
				background.x -= 5;
				level.x -= 5;
			}
			else {
				goomba.x += 5;
			}
		}
		
		console.log(goomba.x + " - " + context.canvas.width / 2);

		setTimeout(Update, 666);
		goomba.Update();
		Render();
	}

	function Render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		background.Render();
		level.Render();
		goomba.Render(); 
	}
});