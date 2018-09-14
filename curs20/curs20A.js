function doSomething() {
	alert();
}

document.getElementById('button1').addEventListener('click', function() {
	alert ('i was clicked');
});
document.getElementById('riseButton').addEventListener('click', function() {
	var z=document.getElementById('sum');
	z.innerHTML=z.innerHTML*z.innerHTML;
});

document.getElementById('input').addEventListener('keydown', function (event) {
	console.log(event.keyCode);
});
