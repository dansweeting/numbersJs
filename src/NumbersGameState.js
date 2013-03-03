var NumbersGameState = function(expressions) {
	this.expressions = expressions;
};

NumbersGameState.prototype = {
	neighbours: function() {
		return [
			new Subtraction(new Num(3),new Num(2)),
			new Addition(new Num(2),new Num(3)),
			new Multiplication(new Num(2),new Num(3)),
		];
	}
}