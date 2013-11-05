function isPrime (number){
	var nombrelimite = number / 2;
	var Check = 1;
	for(i = 2; i <= nombrelimite ; i++){
		if(number % i == 0){
			QUnit.push(false)
			Check = 0;
			return;
		}
		if(Check == 1)
			QUnit.push(true)
	}
	if(number == 1)
		QUnit.push(true)
}
