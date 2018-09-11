function exe1() {
	
	var z = prompt('What is your name?');
	document.getElementById("exe1_1").innerHTML = z;
	document.getElementById("exe1_2").innerHTML = z;
}

// exe1();


function exe2() {
	
	var z = prompt('What is the input string name?');
	document.getElementById("exe2_1").innerHTML = z;
	document.getElementById("exe2_2").innerHTML = z;
	document.getElementById("exe2_3").innerHTML = z.length;

}

// exe2();


function exe3() {
	
	var z = prompt('What is the quote?');
	var y = prompt ('Who said it?');
	document.getElementById("exe3_1").innerHTML = z;
	document.getElementById("exe3_2").innerHTML = y;
	document.getElementById("exe3_3").innerHTML = y;
	document.getElementById("exe3_4").innerHTML = z;

}

// exe3();

function exe4() {
	
	var z = prompt('What is the first number?');
	var y = prompt ('What is the second number?');
	document.getElementById("exe4_1").innerHTML = z;
	document.getElementById("exe4_2").innerHTML = y;
	document.getElementById("exe4_3").innerHTML = z + '+' + y + '=' + (parseInt(z) + parseInt(y));
	document.getElementById("exe4_4").innerHTML = z + '-' + y + '=' + (z - y);
	document.getElementById("exe4_5").innerHTML = z + '*' + y + '=' + (z * y);
	document.getElementById("exe4_6").innerHTML = z + '/' + y + '=' + (z / y);
}

// exe4();


function exe5() {
	
	var z = prompt('What is your current age?');
	var y = prompt ('At what age would you like to retire?');
	var d = new Date();
	document.getElementById("exe5_1").innerHTML = z;
	document.getElementById("exe5_2").innerHTML = y;
	document.getElementById("exe5_3").innerHTML = y - z;
	document.getElementById("exe5_4").innerHTML = d.getFullYear();
	document.getElementById("exe5_5").innerHTML = d.getFullYear() + (parseInt(y-z));
}

exe5();

