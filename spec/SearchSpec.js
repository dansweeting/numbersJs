describe("Search", function() {

	it("should exist", function() {
		expect(new Search()).toBeDefined;
		expect(new Search().Invoke).toBeDefined;
	});

	describe("When a state satisfies the initial target condition", function() {
		var stubState = {
			name: "No Neighbours",
			isTarget: function() { return true;}
		}

		it("should return the initial state since it satisfies target", function() {
			var result = new Search(stubState).Invoke();

			expect(result.name).toBe(stubState.name);
		});
	});

	describe("When a state's immediate neighbour satisfies the initial target", function() {

		var stubState = {
			name: "Initial state",
			isTarget: function() {return false;},
			neighbours: function() {
				return [
					{
						name: "Neighbouring state",
						isTarget: function() {return true;}
					}
				];
			}
		}

		it("should return the state that satisfies the condition", function() {
			var result = new Search(stubState).Invoke();

			expect(result.name).toBe("Neighbouring state");
		});
	});

	describe("When a state and its neighbours do not satisfy the target condition", function() {

		var stubState = {
			name: "Initial state",
			isTarget: function() { return false;},
			neighbours: function() { return [];}
		};

		it("should return nothing", function() {
			var result = new Search(stubState).Invoke();

			expect(result).toBe(undefined);
		});		
	});
});