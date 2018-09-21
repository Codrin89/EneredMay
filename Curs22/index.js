function exe29() {
	var isNumber = false;
	while(!isNumber) {
		var number = prompt('What is the return rate ?');
		var makeDiv = document.createElement('div');
		var makeDivText = document.createTextNode('What is the return rate? ');
		var makeDivNumber = document.createTextNode(number);
		makeDiv.appendChild(makeDivText);
		makeDiv.appendChild(makeDivNumber);
		document.getElementById('exe29').appendChild(makeDiv);

		if(parseInt(number) && parseInt(number) == number && parseInt(number) !== 0) {
			isNumber = true;
			var rate = 72 / number;
			var makeDivResult = document.createElement('div');
			var makeDivResultText = document.createTextNode(' It will take ' + rate + ' years to double your initial investment.');
			makeDivResult.appendChild(makeDivResultText);
			document.getElementById('exe29').appendChild(makeDivResult);
		}else{
			var makeDivError = document.createElement('div');
			var makeDivErrorText = document.createTextNode('Sorry. That\'s not a valid input.');
			makeDivError.appendChild(makeDivErrorText);
			document.getElementById('exe29').appendChild(makeDivError);
		}

	}
}
exe29();
