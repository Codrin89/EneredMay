var inputs = document.getElementsByClassName('input');
console.log(inputs);
var lengthParagraph = document.getElementsByClassName('length-result');
console.log(lengthParagraph);
var textResult = document.getElementsByClassName('text-result');
console.log(textResult);
function calculateLength() {
	for(var i = 0 ; i < inputs.length ; i++){
		lengthParagraph[i].innerHTML = inputs[i].value.length;
		textResult[i].innerHTML = inputs[i].value;
	}
}
calculateLength();

function swapValues() {
//GET
	var firstInputValue = inputs[0].value;
	var secondInputValue = inputs[1].value;
//SET
	inputs[0].value = secondInputValue;
	inputs[1].value = firstInputValue;
}
swapValues();