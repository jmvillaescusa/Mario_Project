function collision(player, object) {
	var collisionSide = "";

	var vx = player.centerX() - object.centerX;
	var vy = player.centerY() - object.centerY;
	
	var combinedHalfWidths = player.halfWidth() + object.halfWidth;
	var combinedHalfHeights = player.halfHeight() + object.halfHeight;
	
	if (Math.abs(vx) < combinedHalfWidths) {
		if (Math.abs(vy) < combinedHalfHeights) {
			var overlapX = combinedHalfWidths - Math.abs(vx);
			var overlapY = combinedHalfHeights - Math.abs(vy);


			if (overlapX >= overlapY) {

				if (vy > 0) {
					collisionSide = "top";
					
					player.y = player.y + overlapY;
				} else {
					collisionSide = "bottom";

					player.y = player.y - overlapY;
				}
			} else {
				if (vx > 0) {
					collisionSide = "left";

					player.x = player.x + overlapX;
				} else {
					collisionSide = "right";

					player.x = player.x - overlapX;
				}
			}
		} else {
			collisionSide = "none";
		}
	} else {
		collisionSide = "none";
	}

	return collisionSide
}; 