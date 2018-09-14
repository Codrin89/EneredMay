var x=document.getElementById('div1');
console.log(x);
x.innerHTML='Three';

var y=document.getElementsByClassName('row');
console.log(y);

var y2=document.getElementsByClassName('row2');
console.log(y2);

y[2].innerHTML='Something';

for (var i=0; i<y.length; i++) {
	y[i].innerHTML = i;
}

var a= document.getElementsByTagName('p');
console.log(a);

var a2= document.getElementsByTagName('div');
console.log(a2);

var t= document.querySelectorAll("p.para1");
console.log(t);