$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var sprites = [];
	var assetsToLoad = [];
	var assetsLoaded = 0;

	/*var block = new Image();
	block.addEventListener("load", loadHandler, false);
	block.src = "images/blocks.png";
	assetsToLoad.push(block);

	var enviroment = new Image();
	enviroment.addEventListener("load", loadHandler, false);
	enviroment.src = "images/enviroment.png";
	assetsToLoad.push(enviroment);

	var title = new Image();
	title.addEventListener("load", loadHandler, false);
	title.src = "images/title.png";
	assetsToLoad.push(title);

	var transition = new Image();
	transition.addEventListener("load", loadHandler, false);
	transition.src = "images/transition.png";
	assetsToLoad.push(transition);*/

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

	Update();

	function Update() {
		requestAnimationFrame(Update, canvas);

		Render();
	}

	function Render() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
});