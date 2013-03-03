describe("Array combinations function", function() {
	var array;

	this.beforeEach(function() {
		array = [1,2,3,4];
	});

	it("should exist", function() {
		expect([].combinations).toBeDefined();
	});

	it("should be the correct size", function() {
		expect(array.combinations().length).toBe(6);
	})

	it("should contain the correct combinations", function() {
		expect(array.combinations()).toContain([1,2]);
		expect(array.combinations()).toContain([1,3]);
		expect(array.combinations()).toContain([1,4]);
		expect(array.combinations()).toContain([2,3]);
		expect(array.combinations()).toContain([2,4]);
		expect(array.combinations()).toContain([3,4]);
	});
});