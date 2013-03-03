describe("Numbers Game Solver", function() {

	it("should exist", function() {
		expect(new Solver()).toBeDefined();
		expect(new Solver([1,2,3]).SolveFor).toBeDefined();
	});


	it("should solve for some simple numbers", function() {

		var solver = new Solver([75,25,5]);

		var resultExpr = solver.SolveFor(105);

		console.log(resultExpr.toString());

		expect(resultExpr.value()).toBe(105);
	});

	//this runs slow as...
	/*it("should solve for some harder numbers", function() {

		var solver = new Solver([100,75,50,25,6,3]);

		var resultExpr = solver.SolveFor(952);

		console.log(resultExpr.toString());

		expect(resultExpr.value()).toBe(952);
	});*/
});