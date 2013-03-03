var NumbersGameState = function(args) {
	this.expressions = args.expressions;
	this.target = args.target;
};

NumbersGameState.prototype = {
	isTarget: function() {
		var target = this.target;
		return _.find(this.expressions, function(exp) {
			return exp.value() == target;
		}) != undefined;
	},
	allOperations: function(lhs,rhs) {
		var min = lhs.value() <  rhs.value() ? lhs : rhs;
		var max = lhs.value() >= rhs.value() ? lhs : rhs;

		var operations = [
			new Addition(min,max),
			new Subtraction(max,min)
		];

		var shouldMultiply = min.value() > 1 && max.value() > 1;
		if (shouldMultiply) {
			operations.push(new Multiplication(min,max))
		}

		var shouldDivide = min.value() > 1 && max.value() % min.value() == 0;
		if (shouldDivide) {
			operations.push(new Division(max,min));
		}
		return operations;
	},
	neighbours: function() {
		var result = [];
		
		return [
			new Subtraction(new Num(3),new Num(2)),
			new Addition(new Num(2),new Num(3)),
			new Multiplication(new Num(2),new Num(3)),
		];
	},
}