function exe1() {
	var z = prompt('What is your name?');
	console.log(z);
	document.getElementById('exe1').innerHTML = z;
}

// exe1();

function exe2() {
	var z = prompt('What is your name?');
	console.log(z.length);
	document.getElementById('exe2_1').innerHTML = z;
	document.getElementById('exe2_2').innerHTML = z;
	document.getElementById('exe2_3').innerHTML = z.length;

}

//exe2();

function exe3() {
	var x = prompt('What is the quote');
	var y = prompt('Who said it?');
	document.getElementById('exe3_1').innerHTML = x;
	document.getElementById('exe3_2').innerHTML = y;
	document.getElementById('exe3_3').innerHTML = y + ' says, "' + x + '."';

}

//exe3();

function exe4() {
	var a = prompt('Enter a noun:');
	var b = prompt('Enter a verb:');
	var c = prompt('Enter an adjective:');
	var d = prompt('Enter a adverb:');
	document.getElementById('exe4_1').innerHTML = a;
	document.getElementById('exe4_2').innerHTML = b;
	document.getElementById('exe4_3').innerHTML = c;
	document.getElementById('exe4_3').innerHTML = d;
	document.getElementById('exe4_5').innerHTML = 'Do you ' + b + " your " + c + ' ' + a + ' ' + d + ' ? ' + " That's hillarious!";

}

//exe4();

function exe5() {
	var a = prompt('What is the first number?');
	var b = prompt('What is the second number?');
	document.getElementById('exe5_1').innerHTML = a;
	document.getElementById('exe5_2').innerHTML = b;
	document.getElementById('exe5_3').innerHTML = parseInt(a) + parseInt(b);
	document.getElementById('exe5_4').innerHTML = a - b;
	document.getElementById('exe5_5').innerHTML = a * b;
	document.getElementById('exe5_6').innerHTML = a / b;
}

//exe5();

function exe6() {
	var a = prompt('What is your current age?');
	var b = prompt('At what age would you like to retire?');
	document.getElementById('exe6_1').innerHTML = a;
	document.getElementById('exe6_2').innerHTML = b;
	document.getElementById('exe6_3').innerHTML ='You have ' + (b - a) + ' years left until you can retire.';
	document.getElementById('exe6_4').innerHTML ='It\'s 2018, so you can retire in ' + (2018 + parseInt(b - a)) + '.';
}

//exe6();

function exe7() {
	var a = prompt('What is the length of the room in feet?');
	var b = prompt('What is the width of the room in feet?');
	document.getElementById('exe7_1').innerHTML = a;
	document.getElementById('exe7_2').innerHTML = b;
	document.getElementById('exe7_3').innerHTML ='You entered dimensions of ' + a + ' feet by ' + b + ' feet.';
	document.getElementById('exe7_4').innerHTML ='The area is ' + a * b + ' square feet<br>'+ ((a * b) * 0.09290304) + ' square meters';
}

//exe7();

function exe8() {
	var a = prompt('How many people?');
	var b = prompt('How many pizzas do you have?');
	document.getElementById('exe8_1').innerHTML = a;
	document.getElementById('exe8_2').innerHTML = b;
	document.getElementById('exe8_3').innerHTML = a + ' people with ' + b + ' pizzas.<br>' + 	'Each person gets' + Math.floor((b * 8) / a)+'pieces of pizza.<br>' +	'There are ' +  ((b * 8) % a)  + ' leftover pieces.';
}
//exe8();

function exe9() {
	var a = prompt('What is the length of the ceiling?');
	var b = prompt('What is the width of the ceiling?');
	var c = 350;
	document.getElementById('exe9_1').innerHTML = a;
	document.getElementById('exe9_2').innerHTML = b;
	document.getElementById('exe9_3').innerHTML = 'You will need to purchase ' + Math.ceil((a * b) / c) + ' gallons of paint to cover' + (a * b) + ' square feet.';
}
//exe9();

function exe10() {
	var a = prompt('Enter the price of item 1:');
	var b = prompt('Enter the quantity of item 1:');
	var c = prompt('Enter the price of item 2:');
	var d = prompt('Enter the quantity of item 2:');
	var e = prompt('Enter the price of item 3:');
	var f = prompt('Enter the quantity of item 3:');
	var g = 5.5;
	document.getElementById('exe10_1').innerHTML = a;
	document.getElementById('exe10_2').innerHTML = b;
	document.getElementById('exe10_3').innerHTML = c;
	document.getElementById('exe10_4').innerHTML = d;
	document.getElementById('exe10_5').innerHTML = e;
	document.getElementById('exe10_6').innerHTML = f;
	document.getElementById('exe10_7').innerHTML = 'Subtotal: $ ' + ((a*b) + (b*c) + (c*d)) + '<br>' + 'Tax : $' + (((a*b) + (b*c) + (c*d)) / g) + '<br>' + 'Total : $' + (((a*b) + (b*c) + (c*d)) + (((a*b) + (b*c) + (c*d)) / g));
}
//exe10();

function exe10b() {
	var x = prompt('How many items?');
	var sum = 0;
	var i = 0;
	while(i<x) {
		var y = prompt('Enter the price of item ' + i);
		var z = prompt('Enter the quantity of item ' + i);
		sum = parseInt(sum) + parseInt(y*z);
		console.log(sum);
		i++;
	}
}
exe10b();