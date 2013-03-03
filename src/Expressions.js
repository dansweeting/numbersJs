var Num = function(num) {
	this.num = num;
}
Num.prototype = {
	toString: function() {
		return this.value();
	},
	value: function() { return this.num;}
}

var Addition = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
Addition.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() + this.rhs.value() }
}

var Subtraction = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
Subtraction.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() - this.rhs.value() }
}

var Multiplication = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
Multiplication.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() * this.rhs.value() }
}

var Division = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
Division.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " / " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() / this.rhs.value() }
}