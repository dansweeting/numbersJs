var numbersGame = numbersGame || {};
numbersGame.expressions = numbersGame.expressions || {};

numbersGame.expressions.Num = function(num) {
	this.num = num;
}
numbersGame.expressions.Num.prototype = {
	toString: function() {
		return this.value();
	},
	value: function() { return this.num;}
}

numbersGame.expressions.Addition = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
numbersGame.expressions.Addition.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() + this.rhs.value() }
}

numbersGame.expressions.Subtraction = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
numbersGame.expressions.Subtraction.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() - this.rhs.value() }
}

numbersGame.expressions.Multiplication = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
numbersGame.expressions.Multiplication.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() * this.rhs.value() }
}

numbersGame.expressions.Division = function(lhs,rhs) {
	this.lhs = lhs;
	this.rhs = rhs;
}
numbersGame.expressions.Division.prototype = {
	toString: function() {
		return "(" + this.lhs.toString() + " / " + this.rhs.toString() + ")";
	},
	value : function() { return this.lhs.value() / this.rhs.value() }
}