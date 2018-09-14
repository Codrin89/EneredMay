function exe1(){
	var z = prompt('What is your name?');
	document.getElementById('exe1_1').innerHTML = z;
	document.getElementById('exe1_2').innerHTML = z;
	console.log(z);
}
//exe1();

function exe2(){
	var a = prompt('What is the input string?');
	document.getElementById('exe2_1').innerHTML = a;
	document.getElementById('exe2_2').innerHTML = a;
	document.getElementById('exe2_3').innerHTML = a.length;

	console.log(a);
}
//exe2();

function exe3(){
	var x = prompt('What is the quote?');
	var y = prompt('Who said');
	document.getElementById('exe3_1').innerHTML = x;
	document.getElementById('exe3_2').innerHTML = y;
	document.getElementById('exe3_3').innerHTML = y;
	document.getElementById('exe3_4').innerHTML = x;

}
//exe3();

function exe5(){
	var c = prompt('What is the first number');
	var b = prompt('What is the second number');
	document.getElementById('exe5_1').innerHTML = c;
	document.getElementById('exe5_2').innerHTML = b;
	document.getElementById('exe5_3').innerHTML = c + '+' + b + '=' + (c + b);
	document.getElementById('exe5_4').innerHTML = c + '-' + b + '=' + (c - b);
	document.getElementById('exe5_5').innerHTML = c + '*' + b + '=' + (c * b);
	document.getElementById('exe5_6').innerHTML = c + '/' + b + '=' + (c / b);
}
//exe5(); 

function exe6(){
	var a = prompt('What is your current age?');
	var b = prompt('At what age would you like to retire?');
	var c = new Date();
	document.getElementById('exe6_1').innerHTML = a;
	document.getElementById('exe6_2').innerHTML = b;
	document.getElementById('exe6_3').innerHTML = b - a;
	document.getElementById('exe6_4').innerHTML = c.getFullYear();
	document.getElementById('exe6_5').innerHTML = (c.getFullYear()) + (b - a);

}
//exe6();
