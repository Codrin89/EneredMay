var inputs = document.getElementsByClassName('input');
console.log(inputs)

var lengthInParagraph = document.getElementsByClassName('length-result');
console.log(lengthInParagraph);

var textInParagraph = document.getElementsByClassName('text-result');

function calculateLength() {
	for(var i = 0 ; i < inputs.length ; i++) {

		lengthInParagraph[i].innerHTML = inputs[i].value.length;
		textInParagraph[i].innerHTML = inputs[i].value;
	}
}

calculateLength();


function swapValues() {

	var firstInputValue = inputs[0].value;
	var secondInputValue = inputs[1].value;

	inputs[0].value = secondInputValue;
	inputs[1].value = firstInputValue;

}
swapValues();