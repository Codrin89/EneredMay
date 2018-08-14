var methodTypesString = "Para are mere!";

var length = methodTypesString.length;
console.log(length);

var indexOfString = methodTypesString.indexOf('are');
console.log(indexOfString);

var sliceOfString = methodTypesString.slice(5, 7);
console.log(sliceOfString);
console.log(methodTypesString);

var subStringOfString = methodTypesString.substring(5, 7);
console.log(subStringOfString);
console.log(methodTypesString);

var replaceOfString = methodTypesString.replace('are', 'www');
console.log(replaceOfString);
console.log(methodTypesString);

var toLowerCaseOfString = methodTypesString.toLowerCase();
var toUpperCaseOfString = methodTypesString.toUpperCase();
console.log(toLowerCaseOfString);
console.log(toUpperCaseOfString);

var concatOfString = methodTypesString.concat('something e');
console.log(concatOfString);

var splitOfString1 = methodTypesString.split('');
var splitOfString2 = methodTypesString.split('are');
var splitOfString3 = methodTypesString.split('!');

console.log(splitOfString1);
console.log(splitOfString2);
console.log(splitOfString3);

var methodTypeNumber = 52.575;

var toStringNumber = methodTypeNumber.toString();
console.log(toStringNumber);

var toFixedNumber = methodTypeNumber.toFixed(5);
console.log(toFixedNumber);

var toPrecisionNumber = methodTypeNumber.toPrecision(6);
console.log(toPrecisionNumber);

var parseIntoNumber = parseInt(methodTypeNumber);
console.log(parseIntoNumber);

var parseFloatNumber = parseFloat(methodTypeNumber);
console.log(parseFloatNumber);

console.log(parseInt("342 423 22"));
console.log(parseInt("3444233232"));
console.log(parseInt("3424.42232"));
console.log(parseFloat("324.42232"));
console.log(Number('232131.2121'))