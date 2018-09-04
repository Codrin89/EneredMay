Recap :

- variables and types:

var string = 'Hello world!';
var number = 123213;
var boolean = true;
var boolean = false;
var array = [123, 'Hello', 'world', true, false, 2354];
var object = {
	"method_one": "hello world",
	"method_two": 12321321,
	"method_three": true,
	"method_four": {
		"method_inside_one": 12321,
		"method_inside_two": "Hello world!"
	}
}

Mathematical operators: 

a + b
a - b
a / b
a * b
a++
b++
a % b

Assign operators:

x = y	
x += y	
x -= y	
x *= y	
x /= y	
x %= y
String operators: 

var txt3 = txt1 + txt2
txt4 += txt5
Comparison operators:

a == b
a === b
a != b
a !== b
a < b
a > b
a >= b
a <= b

Logical operators:
!a
a && b
a || b


Functions: 
function name(parameter1, parameter2, parameter3) {
    code to be executed
}
// call of the function
name(parameter1, parameter2, parameter3);

Constructs:

if(condition) {
	code to be executed if condition is true
} else {
	code to be executed if condition is false
}

while(condition) {
	code to be repeted and executed while the codition is true
}

for(var i = 0; i < length ; i++) {
	code to be executed until i ( the index ) reaches false in the second part of the FOR statement ( condition for break for loop )
}

Methods of types:

String methods:

string.indexOf('piece of text');
// return the position (index) of the variable written as a paramater
string.length;
// returns the length of the string/text  
string.slice(start, end);
// extracts a part of a string and returns the extracted part in a new string
string.replace(searchValue, replaceValue);
// method replaces a specified value with another value in a string
string.toUpperCase();
// string is converted to upper case
string.toLowerCase();
// string is converted to lower case
string.split('value to search');
// string is converted to an array using as a delimiter the 'value to search'

Numbers methods:

x.toString(); 
// returns a number as a string
x.toFixed()
// returns a string, with the number written with a specified number of decimals
x.toPrecision()
// returns a string, with a number written with a specified length

parseInt("321 213 3")
// parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
parseFloat("321.321 321")
// parses a string and returns a number. Spaces are allowed. Only the first number is returned

-> If the number cannot be converted, NaN (Not a Number) is returned

Array methods:

arr.toString()
// converts an array to a string of (comma separated) array values
arr.join("separator")
// converts an array to a string of array values, you specify the separator
arr.pop()
// method removes the last element from an array
arr.push("value")
// method adds a new element to an array (at the end)
arr.unshift("value")
// adds a new element to an array (at the beginning), and "unshifts" older elements