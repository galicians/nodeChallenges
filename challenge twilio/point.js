function Point(x, y) {
	this.x = x
	this.y = y
}


Point.prototype.printArea = function() {
	this.area = this.x * this.y
	console.log("My area is: ", this.area)
}

module.exports = Point;