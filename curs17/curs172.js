
// String


var methodTypeString = "Mama are mere !";
var length = methodTypeString.length;
console.log(length);

var indexOfString = methodTypeString.indexOf('are');
console.log(indexOfString);

var sliceOfString = methodTypeString.slice(3, 5);
console.log(sliceOfString);
console.log(methodTypeString);

var subStringofString = methodTypeString.substring(2, 10);
console.log(subStringofString);
console.log(methodTypeString);


var replaceOfString = methodTypeString.replace("are", "nu are");
console.log(replaceOfString);
console.log(methodTypeString);


var toLowerCaseOfString = methodTypeString.toLowerCase();
var toUpperCaseOfString = methodTypeString.toUpperCase();
console.log(toLowerCaseOfString);
console.log(toUpperCaseOfString);


var concatOfString = methodTypeString.concat("Something");
console.log(concatOfString);


var splitOfString1 = methodTypeString.split('');
var splitOfString2 = methodTypeString.split('are');
var splitOfString3 = methodTypeString.split('!');

console.log(splitOfString1);
console.log(splitOfString2);
console.log(splitOfString3);


// Numbers


var methodTypeNumber = 52.575;
var toStringNumber = methodTypeNumber.toString();
console.log(toStringNumber);


var toFixedNumber = methodTypeNumber.toFixed(2);
console.log(toFixedNumber);

var toPrecisionNumber = methodTypeNumber.toPrecision(7);
console.log(toPrecisionNumber);

var parseIntoNumber = parseInt(methodTypeNumber);
console.log(parseIntoNumber);

var parseFloatNumber = parseFloat(methodTypeNumber);
console.log(parseFloatNumber);




console.log(parseInt('46324 32456 45'));
console.log(parseInt("4584688455"));
console.log(parseInt("456879.254685"));
console.log(parseFloat("45856.254811"));
console.log(Number("2518.2549"));
