function exe32() {

	var level = prompt('Choose a level!');
	var makeDiv = document.createElement('div');
	var makeDivText = document.createTextNode('Pick a difficulty level (1, 2, or 3) ' + level);
	makeDiv.appendChild(makeDivText);
	document.getElementById('guess-number').appendChild(makeDiv);

	
	var randNumber = Math.round((Math.random() *Math.pow(10, level)) + 1);
	var number = 0;
	var makeDiv = document.createElement('div');
	var makeDivText = document.createTextNode ('I have my number.What is your guess? ');
	makeDiv.appendChild(makeDivText);
	var guessCounter = 0;


	while( randNumber != number ){
		number = prompt('Take a guess !?');
		guessCounter ++;
		var numberText = document.createTextNode(number);
		makeDiv.appendChild(numberText);
		if (number < randNumber) {
			var makeDiv = document.createElement('div');
			var makeDivText = document.createTextNode('Too low. What is your guess? ');
			makeDiv.appendChild(makeDivText);
			document.getElementById('guess-number').appendChild(makeDiv);
		} else if(number > randNumber) {
			var makeDiv = document.createElement('div');
			var makeDivText = document.createTextNode('Too high. What is your guess? ');
			makeDiv.appendChild(makeDivText);
			document.getElementById('guess-number').appendChild(makeDiv);
		}
	}
	var makeDiv = document.createElement('div');
	var makeDivText = document.createTextNode('Congrats, it took you ' + guessCounter + ' guesses!');
	document.getElementById('guess-number').appendChild(makeDivText);
}
exe32();