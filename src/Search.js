var numbersGame = numbersGame || {};

numbersGame.Search = function(state) {
	this.state = state;
};

numbersGame.Search.prototype.Invoke = function() {
	var iter = function(states) {

		if (_.isEmpty(states))
			return undefined;

		var target = _.find(states, function(item) {
			return item.isTarget();
		});

		if (target) {
			return target;
		}

		var neighbours = _.map(states, function(state) {
			return state.neighbours();
		})

		var nextGen = _.flatten(neighbours,true);

		return iter(nextGen);
	};

	return iter([this.state]);
};