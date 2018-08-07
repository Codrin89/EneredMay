var z = 'Hello world!';
console.log(z);
//alert(z);
var array = ["abc", 2, 7213, true, "6745"];
console.log(array[2]);
var object = {
		objectString: "something",
		objectNumber: 1234,
		objectBoolean: true,
		objectArray: [213, "abc", "def"]
}
console.log (object["objectArray"]);
console.log (object.objectNumber);

var x;
console.log(x) ;

var a = 2;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
a++;
console.log(a);
b--;
console.log(b);

var a = 2;
var b = 3;
b=a;
console.log (b);

a += 3;
// a = a + 3;
console.log (a);
console.log(a==b) ;

var z = 2;
var x = '2';
var y = 3
console.log(z==x);
console.log(z!=x);
console.log(z===x);

console.log(z!==x);

var bool1 = true;
var bool2 = false;
// || "sau"
// && "si"
// ! "negare"
console.log(bool1 || bool2);
console.log(bool1 && bool2);
console.log(!bool1);

function myFunction() {
	console.log('Hello again');
}
//function call
myFunction();
myFunction();
myFunction();
myFunction();

function myFunction2(parameter1) {
	console.log (parameter1);
}

myFunction2('Something');
myFunction2(2132132);
myFunction2(true);

function mediaAritmetica(parameter1, parameter2, parameter3){
	console.log((parameter1 + parameter2 +parameter3) /3)
}
mediaAritmetica (20,40,50);

function add(parameter1,parameter2) {
	console.log(parameter1 + parameter2);
}

add(20, 30);
add('20', 30);
add('abc', 'def');

console.log('20' / 5);

function addReturn(parameter1, parameter2) {
	 return parameter1 + parameter2;
}
var addedNumbers = addReturn(20 , 30);
console.log(addedNumbers) ;