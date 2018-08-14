var inputs = document.getElementsByClassName("input");
console.log(inputs);

var lengthParagraph = document.getElementsByClassName("length-result");
var lengthText = document.getElementsByClassName("text-result");
console.log(lengthParagraph);

function calculateLength() {
	for( var i=0; i < inputs.length ; i++) {
		lengthParagraph[i].innerHTML = inputs[i].value.length;
		lengthText[i].innerHTML = inputs[i].value;
	}

}
calculateLength();

function swapValues(){
	//GET
	var fisrtInputValue = inputs[0].value;
	var secondInputValue = inputs[1].value;
	//SET
	inputs[0].value = secondInputValue;
	inputs[1].value = fisrtInputValue;
}

swapValues();