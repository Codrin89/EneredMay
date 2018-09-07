var d = new Date();
console.log(d);


var d1 =  new Date(2015, 2 , 3 , 22);
console.log(d1);


var d2 = new Date(838423);
console.log(d2);


var d3 = new Date("12 Mar 2013"); //MM/DD/YYYY
console.log(d3);


var date = new Date(2000, 08, 11, 20);
var year = date.getFullYear();
console.log(year);


date.setFullYear(1999);
var year = date.getFullYear();
console.log(year);

// getTime()  setTime();

var today = new Date();
var time = today.getTime();
console.log(time);
console.log(time/(1000*60*60*24*365));
today.setTime(time-(1000*60*60));
console.log(today);



//random
var z = Math.random();
console.log(z);
z=z*1000;


if(z < 500){
    console.log(z + " was in first 50%");
   } else{
    	console.log(z + " was in last 50%");
}


var max = Math.max(10,20,324,343,34,324,21321);
console.log(max);
