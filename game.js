$(document).ready(function () {
	var canvas = $("canvas");
	var context = canvas.get(0).getContext("2d");

	var sprites = [];
	var assetsToLoad = [];
	var assetsLoaded = 0;

	var image = new Image();
	image.addEventListener("load", loadHandler, false);
	block.src = "images/blocks.png";
	enviroment.src = "enviroment.png";
});