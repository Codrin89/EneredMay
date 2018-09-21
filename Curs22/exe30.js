function exe30(param) {
	var makeBox = document.createElement('div');
	makeBox.setAttribute('class', 'box');
	document.getElementsByClassName('table')[0].appendChild(makeBox);
	for(var i = 0; i < (param + 1); i++){
		var makeBox = document.createElement('div');
		var makeBoxText = document.createTextNode(i);
		makeBox.setAttribute('class', 'box');
		makeBox.appendChild(makeBoxText);
		document.getElementsByClassName('table')[0].appendChild(makeBox);
	}

	var breakRow = document.createElement('br');
	document.getElementsByClassName('table')[0].appendChild(breakRow);

	for(var i = 0; i < (param + 1); i++) {
		var makeBox = document.createElement('div');
		var makeBoxText = document.createTextNode(i);
		makeBox.setAttribute('class', 'box');
		makeBox.appendChild(makeBoxText);
		document.getElementsByClassName('table')[0].appendChild(makeBox);
		for(var j = 0; j <(param + 1); j++){
			var makeBox = document.createElement('div');
		var makeBoxText = document.createTextNode(i*j);
		makeBox.setAttribute('class', 'box');
		makeBox.appendChild(makeBoxText);
		document.getElementsByClassName('table')[0].appendChild(makeBox);
		}
		var breakRow = document.createElement('br');
		document.getElementsByClassName('table')[0].appendChild(breakRow);
	 }
  }

exe30(15);