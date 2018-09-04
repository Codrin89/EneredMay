function exe1() {
	var z=prompt('What is your name?');
	console.log(z);
	document.getElementById('exe1').innerHTML=z;

}
// exe1();
function exe2() {
	var z = prompt('What is the input string?');
	console.log(z);
	document.getElementById('exe2_1').innerHTML = z;
	document.getElementById('exe2_2').innerHTML = z;
	document.getElementById('exe2_3').innerHTML = z.length;
}
// exe2();

function exe3() {
	var z = prompt('What is the quote?');
	var y = prompt('Who said it?');

	document.getElementById('exe3_1').innerHTML = z;
	document.getElementById('exe3_2').innerHTML = y;
	document.getElementById('exe3_3').innerHTML = y;
	document.getElementById('exe3_4').innerHTML = z;
}

// exe3();

function exe4() {

	var z = prompt('Enter a noun');
	var y = prompt('Enter a verb');
	var w = prompt('Enter an adjective');
	var x= prompt('Enter an adverb');

	document.getElementById('exe4_1').innerHTML =z;
	document.getElementById('exe4_2').innerHTML =y;
	document.getElementById('exe4_3').innerHTML =w;
	document.getElementById('exe4_4').innerHTML =x;

	document.getElementById('exe4_5').innerHTML =y;
	document.getElementById('exe4_6').innerHTML =w;
	document.getElementById('exe4_7').innerHTML =z;
	document.getElementById('exe4_8').innerHTML =x;

}
// exe4();

function exe5() {

	var z = prompt('What is the first number?');
	var y = prompt('What is the second number? ');

	document.getElementById('exe5_3').innerHTML = z + ' + ' + y + ' = ' + (parseInt(z) + parseInt(y));
	document.getElementById('exe5_4').innerHTML = z + ' - ' + y + ' = ' + (z - y);
	document.getElementById('exe5_5').innerHTML = z + ' * ' + y + ' = ' + (z * y);
	document.getElementById('exe5_6').innerHTML = z + ' / ' + y + ' = ' + (z / y);
}
//exe5();

function exe6() {

	var z = prompt('What is your current age?');
	var y = prompt('At what age would you like to retire?');

}
//exe6();

function exe10() {
	var x = prompt('How many items');
	var sum = 0;
	var i = 0; 
	while (i < x) {
		var y= prompt ('Enter the price of item' + i)
		var z= prompt ('Enter the quantity of item' + i)
		sum = parseInt(sum) + parseInt(y*z);
		console log(sum);
		i++;
	}

}
exe10();




