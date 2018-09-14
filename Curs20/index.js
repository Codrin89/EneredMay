var a = document.getElementById('div1');
console.log(a);
a.innerHTML = 'Three';

var b = document.getElementsByClassName('row');
console.log(b);

var c = document.getElementsByClassName('row2');
console.log(c);

b[2].innerHTML = 'Something';

for(var i = 0 ; i < b.length ; i++) {
	b[i].innerHTML = i;
}

var d = document.getElementsByTagName('p');
console.log(d);

var d2 = document.getElementsByTagName('div');
console.log(d2);

var e = document.querySelectorAll('.raw3')
console.log(e);