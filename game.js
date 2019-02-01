$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var sprites = [];
	var blocks = [];
	var assetsToLoad = [];
	var assetsLoaded = 0;

	var goomba = new Goomba(context);

	for (var i = 0; i < 1; i++) {
		blocks.push(new Brick(0, 520, 16, 16));
		blocks[i].image.src = blocks[i].source;
	}

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

		Render();
	}

	function Render() {
		context.clearRect(0, 0, canvas.width, canvas.height);

		goomba.Render(); 

		for (var i = 0; i < blocks.length; i++) {
			var j = 40;
			for (var l = 0; l < 50; l++) {
				context.drawImage(blocks[i].image, blocks[i].sourceX, blocks[i].sourceY, blocks[i].sourceWidth, blocks[i].sourceHeight, blocks[i].x + j * l, blocks[i].y, blocks[i].width*2.5, blocks[i].height*2.5);
			}
			for (var l = 0; l < 50; l++) {
				context.drawImage(blocks[i].image, blocks[i].sourceX, blocks[i].sourceY, blocks[i].sourceWidth, blocks[i].sourceHeight, blocks[i].x + j * l, blocks[i].y + j, blocks[i].width*2.5, blocks[i].height*2.5);
			}
		}
	}
});