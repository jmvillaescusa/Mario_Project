$(document).ready(function () {
	var cvs = $("#HUD");
	var ctx = cvs.get(0).getContext("2d");

	var image = new Image();
	image.src = "images/transition.png";
	image.addEventListener("load", loadHandler, false);

	//This HUD is just a still image
	//It will not change during gameplay

	function loadHandler() {
		//Mario
		ctx.drawImage(image, 51, 468, 7, 7, 60, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 83, 460, 7, 7, 80, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 91, 468, 7, 7, 100, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 20, 468, 7, 7, 120, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 67, 468, 7, 7, 140, 40, 7 * 2.5, 7 * 2.5);

		//Score
		ctx.drawImage(image, 3, 460, 7, 7, 60, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 80, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 100, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 120, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 140, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 160, 60, 7 * 2.5, 7 * 2.5);

		//Number of Coins
		ctx.drawImage(image, 92, 19, 7, 7, 220, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 75, 476, 7, 7, 240, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 260, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 280, 60, 7 * 2.5, 7 * 2.5);

		//World
		ctx.drawImage(image, 3, 476, 7, 7, 360, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 67, 468, 7, 7, 380, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 91, 468, 7, 7, 400, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 44, 468, 7, 7, 420, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 107, 460, 7, 7, 440, 40, 7 * 2.5, 7 * 2.5);

		//1-1
		ctx.drawImage(image, 12, 460, 7, 7, 380, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 67, 476, 7, 7, 400, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 12, 460, 7, 7, 420, 60, 7 * 2.5, 7 * 2.5);

		//Time
		ctx.drawImage(image, 107, 468, 7, 7, 500, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 20, 468, 7, 7, 520, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 51, 468, 7, 7, 540, 40, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 115, 460, 7, 7, 560, 40, 7 * 2.5, 7 * 2.5);

		//400
		ctx.drawImage(image, 35, 460, 7, 7, 520, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 540, 60, 7 * 2.5, 7 * 2.5);
		ctx.drawImage(image, 3, 460, 7, 7, 560, 60, 7 * 2.5, 7 * 2.5);
	}
});
