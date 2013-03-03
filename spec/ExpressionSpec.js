describe("Arithmetic expressions", function() {
  
  var expression;
  
  describe("Addition", function() {
    
    beforeEach(function() {
      expression = new Addition(new Num(2),new Num(3));
    })

    it("should provide correct value", function() {
      expect(expression.value()).toEqual(5);
    });

    it("should provide correct toString value", function() {
      expect(expression.toString()).toEqual("(2 + 3)");
    });
  });

  describe("Subtraction", function() {

    beforeEach(function() {
      expression = new Subtraction(new Num(17),new Num(10));
    })

    it("should provide correct value", function() {
      expect(expression.value()).toEqual(7);
    });

    it("should provide correct toString value", function() {
      expect(expression.toString()).toEqual("(17 - 10)");
    });
  });

  describe("Multiplication",function() {

    beforeEach(function() {
      expression = new Multiplication(new Num(7),new Num(10));
    })

    it("should provide correct value", function() {
      expect(expression.value()).toEqual(70);
    });

    it("should provide correct toString value", function() {
      expect(expression.toString()).toEqual("(7 * 10)");
    });
  });

  describe("Division",function() {

    beforeEach(function() {
      expression = new Division(new Num(700),new Num(10));
    })

    it("should provide correct value", function() {
      expect(expression.value()).toEqual(70);
    });

    it("should provide correct toString value", function() {
      expect(expression.toString()).toEqual("(700 / 10)");
    });
  });

  describe("When I add a combination of expressions", function(){

    beforeEach(function() {

      var addition = new Addition(new Num(2),new Num(4));
      expression = new Subtraction(addition,new Num(1));

    })

    it("should provide correct value", function() {
      expect(expression.value()).toEqual(5);
    });

    it("should provide correct toString value", function() {
      expect(expression.toString()).toEqual("((2 + 4) - 1)");
    });

  });
  
});