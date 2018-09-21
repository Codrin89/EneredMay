function exe32() {
	var level=prompt('Chose your level!');
	var makeDiv = document.createElement('div');
	var makeDivText=document.createTextNode('Pick a difficulty level (1,2 or 3)):'+level);
	makeDiv.appendChild(makeDivText);
	document.getElementById('guess-number').appendChild(makeDiv);


	var randNumber = Math.round ((Math.random()* Math.pow (10,level)) +1);
	var number =0;
	var makeDiv = document.createElement('div');
	var makeDivText = document.createTextNode('I have my number. What is your guess? ');
	makeDiv.appendChild(makeDivText);
	document.getElementById('guess-number').appendChild(makeDiv);


	while (randNumber !=number) {
		number= prompt('Take a guess!?');
		var numberText=document.createTextNode(number);
		makeDiv.appendChild(numberText);
		if (number !=randNumber) {
			var makeDiv=document.createElement('div');
			var makeDivText=document.createTextNode('Too Low. What is your guess?');
			makeDiv.appendChild(makeDivText);
			document.getElementById('guess-number').appendChild(makeDiv);
		} else if (number> randNumber) {
			var makeDiv= document.createElement ('div');
			var makeDivText=document.createTextNode('I have my number. What is your guess');
			makeDiv.appendChild(makeDivText);
			document.getElementById('guess-number').appendChild(makeDiv);
		}
	}
	
		var makeDiv=document.createElement('div')
		var makeDivText=document.createTextNode('CONGRATS, it took you'+ guessCounter + 'guesses!' );
		makeDiv.appendChild(makeDivText);
		document.getElementById('guess-number').appendChild(makeDiv);
}

exe32();
