console.log(document);

var contentById = document.getElementById('content');
console.log(contentById);
var contentByClass = document.getElementsByClassName('content');
console.log(contentByClass);
console.log(contentByClass[1]);

console.log(contentByClass[1].innerHTML);
contentByClass[1].innerHTML = 'BLA BLA';
contentByClass[1].style.color = 'red';
contentByClass[1].style.display = 'inline-block';
contentByClass[1].style.width = '100px';
contentByClass[1].style.padding = '10px 5px';

var inputByClass = document.getElementsByClassName('inputValue');
console.log(inputByClass[0].value);
// inputByClass[0].value = 'Something';

function onClickButton() {
	var inputByClass = document.getElementsByClassName('inputValue');
	inputByClass[0].value = parseInt(inputByClass[0].value) + 10;
}




