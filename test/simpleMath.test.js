module( "Factorial", {
	setup : function (){
		this.simpleMath = new SimpleMath();
	},
	teardown : function (){
		delete this.simpleMath;
	}
});

// Factorial TEST
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

module( "Signum", {
	setup : function (){
		this.simpleMath = new SimpleMath();
	},
	teardown : function (){
		delete this.simpleMath;
	}
});

// Signum TEST
test("Calculating signum for a positive number", function(){
	equal(this.simpleMath.signum(3), 1, "Signum of 3 must equal 0");
});

test('Calculating signum for zero', function() {
	// TODO
	equal(this.simpleMath.signum(0), 0, 'Signum of zero must equal zero');
});

test('Calculating signum for a negative number', function() {
	equal(this.simpleMath.signum(-1000), -1, 'Signum of -1000 must equal -1');
});