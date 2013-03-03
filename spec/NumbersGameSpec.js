describe("NumbersGameState", function() {

	this.beforeEach( function() {
		this.addMatchers( {
			toContainItemMatching: function(match) {
				return _.find(this.actual, function(exp) {
					return exp.toString() === match;
				}) != undefined;
			}
		});
	});

	it("Should exist", function() {
		expect(new NumbersGameState( {
			expressions : [new Num(1)]})).toBeDefined();
	});

	it("Should detect when it doesnt contain the target expression", function() {
		var expressions = [new Num(10),new Num(50)];
		var state = new NumbersGameState({
		 expressions: expressions,
		 target: 11 });
		expect(state.isTarget()).toBe(false);
	});

	it("Should detect when it contains the target expression", function() {
		var expressions = [new Num(10),new Num(50)];
		var state = new NumbersGameState({
			expressions: expressions,
			target: 10 });
		expect(state.isTarget()).toBe(true);
	});

	describe("Should detect add,subtracts and multiplications", function() {

		var neighbours;

		beforeEach(function() {
			var expressions = [new Num(2),new Num(3)];
			var state = new NumbersGameState( {
				expressions: expressions,
				target: 1});
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

	describe("Should detect add,subtracts and multiplications", function() {

		var neighbours;

		beforeEach(function() {
			var expressions = [new Num(5),new Num(25)];
			var state = new NumbersGameState( {
				expressions: expressions,
				target: 1 });
			neighbours = state.neighbours();
		});

		it("Should have 4 items", function() {
			expect(neighbours.length).toEqual(4);
		});

		it("Should contain 5 + 25", function() {
			expect(neighbours).toContainItemMatching("(5 + 25)");
		});	

		it("Should contain 5 * 25", function() {
			expect(neighbours).toContainItemMatching("(5 * 25)");
		});	

		it("Should contain 25 / 5", function() {
			expect(neighbours).toContainItemMatching("(25 / 5)");
		});	

		it("Should contain 25 - 5", function() {
			expect(neighbours).toContainItemMatching("(25 - 5)");
		});		
	});



});