 function exe1(){
	var z = prompt("what is your name?");
	console.log(z);
	document.getElementById("exe1").innerHTML = z;
}

// exe1();



function exe2(){
	var y = prompt("What is the input string?");
	console.log(y);
	document.getElementById("exe2").innerHTML = y;
	document.getElementById("exe21").innerHTML = y;
    document.getElementById("exe22").innerHTML = y.length;
}

// exe2();


function exe3(){
    var y = prompt("What is the quote?");
    var z = prompt("Who said it?");
    document.getElementById("exe31").innerHTML = y;
    document.getElementById("exe32").innerHTML = z;
    document.getElementById("exe33").innerHTML = z + ' says, "' + y + '."' ;

 //    What is the quote? These aren't the droids you're looking for.
	// Who said it? Obi-Wan Kenobi
	// Obi-Wan Kenobi says, "These aren't the droids
	// you're looking for."


}

// exe3();


function exe4(){
     var x = prompt("Enter a noun");
     var y = prompt("Enter a verb");
     var r = prompt("Enter an adjective");
     var t = prompt("Enter an adverb");
     document.getElementById("exe41").innerHTML = x;
     document.getElementById("exe42").innerHTML = y;
     document.getElementById("exe44").innerHTML = t;
     document.getElementById("exe43").innerHTML = r;
     document.getElementById("exe45").innerHTML = 'Do you ' + y + ' your' + x + r + t +'?' + ' That\'s hilarious!';

}

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly
// // Do you walk your blue dog quickly? That's hilarious!


// exe4();


function exe5(){
	var x = prompt("What is the first number?");
	var y = prompt("What is the second number?");
    document.getElementById("exe51").innerHTML = x;
    document.getElementById("exe52").innerHTML = y;
    document.getElementById("exe53").innerHTML = parseInt(x) + parseInt(y);
    document.getElementById("exe54").innerHTML = x/y;
    document.getElementById("exe55").innerHTML = x-y;
    document.getElementById("exe56").innerHTML = x*y;
  

}


// exe5();

function exe6(){
	var x = prompt("What is your current age?");
	var y = prompt("At what age would you like to retire?");
	document.getElementById("exe61").innerHTML = x;
    document.getElementById("exe62").innerHTML = y;
    document.getElementById("exe63").innerHTML = y-x;
    document.getElementById("exe64").innerHTML = 2015 + (parseInt(y)-parseInt(x));
}

// exe6();


function exe7(){
	var x = prompt("What is the length of the room in feet?");
	var y = prompt("What is the width of the room in feet?");
	document.getElementById("exe71").innerHTML = x;
    document.getElementById("exe72").innerHTML = y;
    document.getElementById("exe73").innerHTML = 'You entered dimensions of' + x + ' feet by'+ y +' feet.'
    document.getElementById("exe74").innerHTML = ((x*y)*0.09290304).toFixed(3);
    document.getElementById("exe75").innerHTML = x*y;

  
}

// exe7();



function exe8(){
	var x = prompt("How many people?");
	var y = prompt("How many pizzas do you have?");

	document.getElementById("exe81").innerHTML = x;
    document.getElementById("exe82").innerHTML = y;
    document.getElementById("exe83").innerHTML = x + ' people with ' + y + ' pizzas';
    document.getElementById("exe84").innerHTML = "Each person gets " + Math.floor((y * 8) / x) + ' slices';
    document.getElementById("exe85").innerHTML = "There are " + + " leftover pieces";

}

// exe8();




function exe10(){
	var x = prompt("How many items?")
	var i = 0;
	var sum = 0;
	while((i < x)){
        
        var y = prompt("Enter the price of item" + i);
        var z = prompt("Enter the quantity of item" + i)  ; 

        sum = parseInt(sum) + parseInt(y*z);
        console.log(sum);
        console.log(sum + 0.055);
        console.log(sum + (sum*0.055));


         i++;
	}
}

exe10();