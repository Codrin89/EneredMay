//Constructs

var a = 2;
var b = 5;

if( a == b) {
	console.log('a egal cu b');
} else {
	console.log('a diferit de b');
}


var a = 2;
var b = "2";

if( a == b) {
	console.log('a egal cu b');
} else {
	console.log('a diferit de b');
}

if (true) {
	console.log("condition is true");
} else {
	console.log("condition is false");
}

if(true || false) {
	console.log("condition is true");
}

if(false) {
	console.log("condition is true");
}

if(false) {
	console.log('first condition');
} else if(false) {
	console.log('second condition');
} else {
	console.log('third condition');
}


var z = "Hello";

if (z == "Something") {
	console.log("Something");
} else if(z == "Anything") {
	console.log("Anything");
} else {
	console.log(z);
}


var z = 0;
while(z < 12) {
	console.log(z);
	z++;
}

for(var i = 0 ; i < 10; i++) {
	// condition here
	console.log(i);
	// i++ here
}

for(var i = 0 ; i < 10; i = i + 2) {
	// condition here
	console.log(i);
	// i++ here
}


console.log(window);
console.log(document);
console.log(window.location.href);






