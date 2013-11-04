SimpleMath = function (){
	// TODO
};

SimpleMath.prototype.getFactorial = function (n){
	// TODO
	if(n<0){
		throw new Error ("There is no factorial for negative number");
	}else {
		var fat = 1;
		for (var i = 1; i <= n; i++) {
			fat *= i
		};
		return fat;
	}
};

SimpleMath.prototype.signum = function (n){
	// TODO
	if(n == 0){
		return 0;
	}else if(n > 0){
		return 1;
	}else{
		return -1;
	}
};

SimpleMath.prototype.average = function (n1, n2){
	// TODO
	return ((n1 + n2)/2);
};