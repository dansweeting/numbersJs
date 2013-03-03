describe("NumbersGameState", function() {

	this.beforeEach( function() {
		this.addMatchers( {
			toContainItemMatching: function(match) {
				var foundAt = -1;
				$.each(this.actual, function(index,value) {
					if ( value.toString() === match) {
						foundAt = index;
					}
				});
				return foundAt >= 0;
			}
		});
	});

	it("Should exist", function() {
		expect(new NumbersGameState([new Num(1)])).toBeDefined();
	});

	describe("Should detect add,subtracts and multiplications", function() {

		var neighbours;

		beforeEach(function() {
			var expressions = [new Num(2),new Num(3)];
			var state = new NumbersGameState(expressions);
			neighbours = state.neighbours();
		});

		it("Should have 3 items", function() {
			expect(neighbours.length).toEqual(3);
		});

		it("Should contain 3 - 2", function() {
			expect(neighbours).toContainItemMatching("(3 - 2)");
		});	

		it("Should contain 2 * 3", function() {
			expect(neighbours).toContainItemMatching("(2 * 3)");
		});	

		it("Should contain 2 + 3", function() {
			expect(neighbours).toContainItemMatching("(2 + 3)");
		});		
	});
});