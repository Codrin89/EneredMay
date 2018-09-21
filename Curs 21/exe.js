function exe26() {
	var b = document.getElementById('exe26_1').value;
	var i = document.getElementById('exe26_2').value;
	var p = document.getElementById('exe26_3').value;
	b = parseInt(b);
	i = parseInt(i);
	p = parseInt(p);

	document.getElementById('exe26_4').innerHTML = b;
	document.getElementById('exe26_5').innerHTML = i;
	document.getElementById('exe26_6').innerHTML = p;

	var n = (-1/30) * ((Math.log(1 + (b/p * (1- Math.pow((1 + i/365), 30)))))/(Math.log(1 + i)));
	document.getElementById('exe26_7').innerHTML = n;
}

function exe28() {
	var number = document.getElementById("input-number").value;
	document.getElementById('exe28_1').innerHTML += ' ' + number;
	document.getElementById('exe28_2').innerHTML = parseInt(document.getElementById('exe28_2').innerHTML) + parseInt(number);
	document.getElementById('input-number').value = "";
}
