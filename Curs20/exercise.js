function exe1() {
	var z = prompt('What is your name?');
	console.log(z);
	document.getElementById('exe1').innerHTML = z;
}
//exe1();

function exe2() {
	var z = prompt('What is your name?');
	document.getElementById('exe2_1').innerHTML = z;
	document.getElementById('exe2_2').innerHTML = z;
	document.getElementById('exe2_3').innerHTML = z.length;

}
//exe2();

function exe3() {
	var z = prompt('What is the quote?');
	var y = prompt('Who said it?');
	document.getElementById('exe3_1').innerHTML = z;
	document.getElementById('exe3_2').innerHTML = y;
	document.getElementById('exe3_3').innerHTML = y;


}
//exe3();

function exe4() {
	var z = prompt('Enter a noun:');
	var y = prompt('Enter a verb:');
	var x = prompt('Enter an adjective:');
	var c = prompt('Do you walk your blue dog quickly?');
	document.getElementById('exe4_1').innerHTML = z;
	document.getElementById('exe4_2').innerHTML = y;
	document.getElementById('exe4_3').innerHTML = x;
	document.getElementById('exe4_4').innerHTML = c;
}
//exe4();

