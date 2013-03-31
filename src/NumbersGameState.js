var numbersGame = numbersGame || {};

numbersGame.NumbersGameState = function(args) {
	this.expressions = args.expressions;
	this.target = args.target;
};

numbersGame.NumbersGameState.prototype = {
	isTarget: function() {
		var target = this.target;
		return _.find(this.expressions, function(exp) {
			return exp.value() == target;
		}) != undefined;
	},
	allOperations: function(lhs,rhs) {
		var min = lhs.value() <  rhs.value() ? lhs : rhs;
		var max = lhs.value() >= rhs.value() ? lhs : rhs;

		var minValue = min.value();
		var maxValue = max.value();

		var operations = [
			new Addition(min,max),
			new Subtraction(max,min)
		];

		operations = _.filter(operations,function(elem) {
			return elem.value() > 0;
		});

		var shouldMultiply = minValue > 1 && maxValue > 1;
		if (shouldMultiply) {
			operations.push(new Multiplication(min,max))
		}

		var shouldDivide =  minValue > 1 &&
		 					minValue != maxValue && 
		 					maxValue % minValue == 0;
		if (shouldDivide) {
			operations.push(new Division(max,min));
		}
		return operations;
	},
	neighbours: function() {
		var result = [];
		var state = this;
		_.each( this.expressions.combinations(), function(elem,index,list) {
			var lhs = elem[0];
			var rhs = elem[1];
			_.each(state.allOperations(lhs,rhs), function(elem,index,list) {
				var exprs = _.union([elem],_.without(state.expressions,lhs,rhs));
				result.push(new NumbersGameState( {
					expressions : exprs,
					target: state.target
				 }));
			});
		});
		return result;
	},
}