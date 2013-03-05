var numbersGame = numbersGame || {};

numbersGame.Solver = function(nums) {
	this.nums = nums;
};

numbersGame.Solver.prototype.SolveFor = function(target) {
	var initialExpressions = _.map(this.nums,function(num) {
		return new Num(num);
	});

	var initialState = new NumbersGameState( {
		expressions: initialExpressions,
		target: target
	});

	var search = new Search(initialState);

	var answer = search.Invoke();

	return _.find(answer.expressions, function(item) {
		return item.value() == target;
	})	
};