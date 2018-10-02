
var turn = "X"
var boxes = document.getElementsByClassName("col-xs-4");
var winArray = [
      [0,1,2],
      [0,3,6],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
];


for(var i = 0 ; i < boxes.length ; i++){
	boxes[i].addEventListener("click", function(){
		tictactoe(this);
		// this se transforma intr-un box
	})
}


function tictactoe(element){
     if(element.getAttribute("class") == "col-xs-4 dirty"){
     	return;
     }else{
     	element.innerHTML = turn;
     	if(turn === "X"){
     		turn = "0"
     	}else{
     		turn = "X"
     	}
     	element.setAttribute("class", "col-xs-4 dirty")
     }   
     
   validateWin();
 }


function validateWin(){
	for( var i = 0; i < winArray.length ; i++){
		if(boxes[winArray[i][0]].innerHTML === boxes[winArray[i][1]].innerHTML &&
		   boxes[winArray[i][0]].innerHTML === boxes[winArray[i][2]].innerHTML &&
		   boxes[winArray[i][0]].innerHTML !== ""){
                     alert(boxes[winArray[i][1]].innerHTML + " has won");
                 resetGame();
		}
		
	}
   
    var gameIsDraw = true;
    for( var i = 0 ; i < boxes.length; i++){
    	if (boxes[i].innerHTML === "") {
    		gameIsDraw = false;

    	}
    }

    if(gameIsDraw){
    	alert("Nobody has won!!");
    	resetGame();
    }

}



function resetGame(){
	window.location.reload();
}

































function resize(){
     var boxes = document.getElementsByClassName("col-xs-4");
     console.log(boxes[0].offsetWidth)

     for(var i=0; i<boxes.length; i++ ){
     	boxes[i].style.height = boxes[i].offsetWidth + "px";
     	// boxes[i] - toate valorile de la 0 la 8
     }

}


resize();
// ca sa fie de la inceput patratele