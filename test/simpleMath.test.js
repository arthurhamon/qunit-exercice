module( "Factorial", {
	setup : function (){
		this.simpleMath = new SimpleMath();
	},
	teardown : function (){
		delete this.simpleMath;
	}
});

test("Calculating factorial for a positive number", function(){
	equal(this.simpleMath.getFactorial(3), 6, "Factorial suceed");
});

test('Calculating factorial for zero', function() {
  // TODO
  equal(this.simpleMath.getFactorial(0), 1, 'Factorial of zero must equal one');
});

test('Throwing an error when calculating the factorial for a negative number', function() {
	raises(function(){
		this.simpleMath.getFactorial(-10);
	}, "There is no factorial for negative number");
});