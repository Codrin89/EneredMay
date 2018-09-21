   
  function exe29() {
       	var isNumber = false;

       	while(!isNumber) {

       	var number = prompt('What is the rate of return?');

       	var makeDiv = document.createElement ('div');
       	var makeDivText = document.createTextNode ('What is the rate of return?' );
       	var makeDivNumber = document.createTextNode(number);
       	makeDiv.appendChild(makeDivText);
       	makeDiv.appendChild(makeDivNumber);
       	document.getElementById('exe_29').appendChild(makeDiv);

       	if(parseInt(number) && parseInt(number) == number && parseInt(number) !==0) {
       		isNumber = true;
       		var makeDivSuccess=document.createElement('div');
       		var makeDivSuccessText=document.createTextNode('It will take you' +72/ number + 'years to double initial investment');
       		makeDivSuccess.appendChild(makeDivSuccessText);
       		document.getElementById('exe_29').appendChild(makeDivSuccess);
       	} else {
       		var makeDivError = document.createElement('div');
       		var makeDivErrorText = document.createTextNode('Sorry.That \' s not a valid input.');
       		makeDivError.appendChild(makeDivErrorText);
       		document.getElementById('exe_29').appendChild(makeDivError);

       	}
   	}

 }
exe29()   