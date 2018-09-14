function exe7() {
	var z = prompt('What is the length of the room in feet?');
	var y = prompt('What is the width of the room in feet?');

	document.getElementById('exe7_1').innerHTML=z;
	document.getElementById('exe7_2').innerHTML=y;
	document.getElementById('exe7_3').innerHTML=z;
	document.getElementById('exe7_4').innerHTML=y;
	document.getElementById('exe7_5').innerHTML = z + ' * ' + y + ' = ' + (parseInt(z) * parseInt(y));
	document.getElementById('exe7_6').innerHTML = (parseInt(z) * parseInt(y) * 0.09290304).toFixed(3);


}
// exe7();


function exe8() {
	var z = prompt('How many people?');
	var y = prompt('How many pizzas do you have?');

	document.getElementById('exe8_1').innerHTML=z;
	document.getElementById('exe8_2').innerHTML=y;
	document.getElementById('exe8_3').innerHTML=z;
	document.getElementById('exe8_4').innerHTML=y;
	document.getElementById('exe8_5').innerHTML=y;
}
exe8();