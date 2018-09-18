function exe26() {
	var b = document.getElementbyId('exe26_1').value;
	var i = document.getElementbyId('exe26_2').value;
	var p = document.getElementbyId('exe26_3').value;

	document.getElementbyId('exe26_4').innerHTML = b;
	document.getElementbyId('exe26_5').innerHTML = i;
	document.getElementbyId('exe26_6').innerHTML = p;

	// vat n = (-1/30) * ( (Math.log(1 + ((b/p) * (1 - Math.pow((1 + i/365), 30)))) ) / (Math.log(1 + i)) );
	// 	document.getElementbyId('exe26_7').innerHTML = n;
}

//nu e bun :))

function exe28 () {
	var number = document.getElementById('input-number').value;
	document.getElementById('exe28_1').innerHTML += ' ' + number;
	document.getElementById('exe28_2').innerHTML = parseInt(document.getElementById('exe28_2').innerHTML) + parseInt(number);
	document.getElementById('input-number').value = "";
}