Exercitii:

//create a function that will output/return the bigger value of the two parameters it recevies
//print in div1

function outputBiggerValue(value1, value2) {
	if (value1 > value2) {
		document.getElementById('div1').innerHTML = value1; 
		return value1;
	} else {
		return value2;
	}
	
}

outputBiggerValue(20,10)

//create a function that will output/return the bigger value of the three parameters it recevies
//print in div2

function outputBiggerValue2(value1, value2, value3) {



	if (value1 > value2) {

		if (value1 > value3) {
			document.getElementById('div2').innerHTML = value1;
			return value1;	
		} else {
			document.getElementById('div2').innerHTML = value3;
			return value3;
		}
	}else {
		if (value2 > value3) {
			document.getElementById('div2').innerHTML = value2;
			return value2;
		} else {
			document.getElementById('div2').innerHTML = value3;
			return value3;
		}	
	}
	

	
}
outputBiggerValue2(30, 70, 19);

//create a function that will output/return the arithmetic mean of the three parameters it recevies
//print in div3

function arithmeticMean(value1, value2, value3) {
	var arithmeticMean = (value1 + value2 + value3)/3;
	document.getElementById('div2').innerHTML = arithmeticMean;
	return arithmeticMean;
	
} 




arithmeticMean(42, 77, 245)


//create a function that will output/return the concatanated result of the two parameters
//print in div4
function concatText(value1, value2) {
	var arithmeticMean = value1 + value2;
	document.getElementById('div4').innerHTML = arithmeticMean;
	return arithmeticMean;
	

	
}

concatText("Hello", " world!");

//create a function that will trigger and alert function

function triggerAlert() {

	alert("something");
	
	
}
triggerAlert();



//create a function that will print to the console (console.log()) the parameter

function consoleTheValue(value1) {

	console.log(value1);
	
	
}
consoleTheValue("Ablehe!!!");

//create a function that will modify the value of the input with the value of the parameter
//modify in input1

function inputModify(value1) {

	document.getElementById('input1').value = value1;
	
	
}
inputModify('true');