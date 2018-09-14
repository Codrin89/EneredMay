var d = new Date();

console.log(d);

var d1 = new Date(2015, 10, 10, 22);
console.log(d1);

var d2 = new Date(321321);
console.log(d2);

var d3 = new Date("12-03-2013"); //formatul american : luna/zi./an
console.log(d3);

var date = new Date(2001, 08, 11, 11, 20);
console.log(date);
var year = date.getFullYear();
console.log(year);
date.setFullYear(1999);
var year = date.getFullYear();
console.log(year);
//getTime() setTime()
var today = new Date();
var time = today.getTime();
console.log(time);
console.log(time / (1000 * 60 * 60 * 24 * 365));
today.setTime(time - (1000 * 60 * 60));
console.log(today);

//random
var z = Math.random();
console.log(z);
z = z * 1000;
if(z > 500) {
	console.log(z + 'was in first 50%');
}else{
	console.log(z + 'was in last 50%');
}

//Math.min and Math.max
var max = Math.max(10, 30, 50, 222, 921, 1450, 22, 10);
console.log(max);

function exe11() {
	var euro = prompt('How many euros are you exchanging?');
	var rate = prompt('What is the exchange rate?');
	var dollars = (euro * rate) / 100;
	document.getElementById('dollars').innerHTML = dollars;
}
//exe11();
function exe12(){
	var a = prompt('Enter the principal: ');
	var b = prompt('Enter the rate of interest: ');
	var c = prompt('Enter the number of years: ');
	document.getElementById('exe12_1').innerHTML = a;
	document.getElementById('exe12_2').innerHTML = b;
	document.getElementById('exe12_3').innerHTML = c;
	document.getElementById('exe12_4').innerHTML = 'After ' + c + 'years at ' + b + ', the investment will be worth ' + a * (1 + ((b / 100) * c)) + ' $ ';
}
//exe12();
function exe14(){
	var ammount = document.getElementById('exe14_in1').value;
	var state = document.getElementById('exe14_in2').value;
	console.log(ammount);
	console.log(state);
	if (ammount !== "" && parseInt(ammount)) {
		document.getElementById('exe14_1').innerHTML= ammount;
		document.getElementById('exe14_2').innerHTML= state;
		document.getElementsByClassName('result')[0].style.display = "block";
	}else{
		document.getElementsByClassName('result')[0].style.display = "none";
	}
	if (state === "WI") {
		document.getElementById('exe14_3').innerHTML = ammount;
		document.getElementById('exe14_4').innerHTML = ammount * 0.055;
		document.getElementById('exe14_5').innerHTML =parseInt(ammount) + (ammount * 0.055);
		document.getElementsByClassName('subtotal')[0].style.display = "block";
	}else{
		document.getElementById('exe14_5').innerHTML = ammount;
		document.getElementsByClassName('subtotal')[0].style.display = "none";
	}
}

function exe18(){
	var type = document.getElementById('exe18_type').value;
	var temp = document.getElementById('exe18_temp').value;
	if(temp !=="" && parseInt(temp) && type !== "") {
		if(type.toUpperCase() === "C") {
			//convert to celsius
			var temp_final = (temp - 32) * 5 / 9;
		}else{
			//conversion to farenheit
			if(temp == 0) {
				var temp_final =  32;
			} else {
				var temp_final = (temp * 9 / 5) + 32;
			}
		}
		document.getElementById('exe18_1').innerHTML = type;
		document.getElementById('exe18_2').innerHTML = temp;
		document.getElementById('exe18_3').innerHTML = temp_final;
		if(type.toUpperCase() === "C") {
			document.getElementById('exe18_4').innerHTML = "Farenheit";
		} else {
			document.getElementById('exe18_4').innerHTML = "Celsius";
		}
	}
}
function verifyConversionType() {
	var z = document.getElementById('exe18_type').value;
	if(z.toUpperCase() === "C" || z.toUpperCase() === "F") {
	}else{
		document.getElementById('exe18_type').value = "";
	}
}

function exe13(){
	var ammount = document.getElementById('exe13_p').value;
	var rate = document.getElementById('exe13_r').value;
	var years = document.getElementById('exe13_t').value;
	var periods = document.getElementById('exe13_n').value;
	document.getElementById('exe13_1').innerHTML = ammount;
	document.getElementById('exe13_2').innerHTML = years;
	document.getElementById('exe13_3').innerHTML = rate;
	document.getElementById('exe13_4').innerHTML = periods;
	var a = ammount * Math.pow((1 + (rate / periods)), (periods * years));
	document.getElementById('result_amount').innerHTML = a.toFixed(2);
}

function exe15(){
	var a = prompt('What is the password?');
	var b = 'Dunhill123';
	if (b === a) {
		document.getElementById('exe15_2').innerHTML = 'Welcome!';
	}else{
		document.getElementById('exe15_2').innerHTML = "I don't know you.";
	}
}
//exe15();

function exe16(){
	var a = prompt('What is your age?');
	var c = 16;
	if (a < c) {
		document.getElementById('exe16_2').innerHTML = 'You are not old enough to legally drive.';
	}else{
		document.getElementById('exe16_2').innerHTML = "You are old enough to legally drive.";
	}
}
//exe16();

function exe19() {
	var w = document.getElementById('exe19_in1').value;
	var h = document.getElementById('exe19_in2').value;
	var z = document.getElementById('result').innerHTML = (w / (h * h)) * 703;
	if ( 18.5 < z, z < 25 ) {
		document.getElementById('result').innerHTML = z.toFixed(2) + '<br> You are within the ideal weight range.';
	}else{
		document.getElementById('result').innerHTML = z.toFixed(2) + '<br> You are overweight. You should see your doctor.';
	}
}

function exe20(){
	var a = prompt('What is the order amount?');
	var b = prompt('What state do you live in?');
	var tax = 0;
	if(b == "Wisconsin") {
		var c = prompt('What is your county?');
		if(c == "Eau Claire") {
			tax = 0.005;
		}
		if(c == "Dunn") {
			tax = 0.004;
		}
	}
	if(b == "Illinois") {
		tax = 0.08;
	}
	if(tax == 0) {
		document.getElementById("tax_sum").style.display = "none";
	}

	document.getElementById('exe20_1').innerHTML = a;
	document.getElementById('exe20_2').innerHTML = b;
	document.getElementById('exe20_3').innerHTML = a * tax;
	document.getElementById('exe20_4').innerHTML = parseInt(a) + (a * tax);

}
//exe20();

function exe21() {
	var array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	z = 0;
	while( z === 0 ) {
		var z = prompt('Please enter the number of the month: ');
		if (0 < z && z <= 12) {
			document.getElementById('month').innerHTML =  array[z - 1];
		} else {
			z = 0;
		}
	} 
}
//exe21();