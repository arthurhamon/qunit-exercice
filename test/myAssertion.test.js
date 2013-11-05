module( "Is Prime", {
	setup : function (){
	},
	teardown : function (){
	}
});

// Average TEST
test("Find is a number is Prime or Not", function(){
	isPrime(8, "");
});

test("test", function(){
	stop();
	my_var = 'arthur';
	window.setTimeout(function(){
		start();
		my_var = "louise";
		equal(my_var, 'louise', 'its okay');
	}, 3000);
});
