var Num = function(num) {
	this.value = num;
}

Num.prototype = {
	toString: function() {
		return this.value;
	}
}

var Addition = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
	this.value = lhs.value + rhs.value;
}
Addition.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")";
	}
}

var Subtraction = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
	this.value = lhs.value - rhs.value;
}
Subtraction.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")";
	}
}

var Multiplication = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
	this.value = lhs.value * rhs.value;
}
Multiplication.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")";
	}
}

var Division = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
	this.value = lhs.value / rhs.value;
}
Division.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " / " + this.rhs.toString() + ")";
	}
}