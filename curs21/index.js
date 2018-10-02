function gatherData(){
	var objectData = {
		"first_name": document.getElementById("first_name").value,
		"last_name": document.getElementById("last_name").value,
		"nickname": document.getElementById("nickname").value,
		"age": document.getElementById("age").value,
		"ocupation": document.getElementById("ocupation").value
	}
   
   var validForm = validateData(objectData);
   if(validForm){
        console.log(objectData);
   }else{
   	alert("is not valid!");
   }

}


function validateData(data){
	var validForm = true;
	// validate first name, at least 3 letters and no numbers
      var stringRegex = new RegExp("^([^0-9]*)$");
      if(data.first_name!="" && data.first_name.match(stringRegex)){
         // this is a match
         document.getElementById("first_name").classList.remove("input-error");
      

      }else{
      	    // this doesn't match
      	    document.getElementById("first_name").classList.add("input-error");
      	    validForm = false;
      }

      
       if(data.last_name !="" && data.last_name.length > 5){

       	 document.getElementById("last_name").classList.remove("input-error");
      

      }else{
      	    // this doesn't match
      	    document.getElementById("last_name").classList.add("input-error");
      	    validForm = false;
      }
      


      if(data.nickname !="" && data.nickname.length > 8){

       	 document.getElementById("nickname").classList.remove("input-error");
      

      }else{
      	    // this doesn't match
      	    document.getElementById("nickname").classList.add("input-error");
      	    validForm = false;
      }

      if(data.age !="" && data.age.length > 1 ){

       	 document.getElementById("age").classList.remove("input-error");
      

      }else{
      	    // this doesn't match
      	    document.getElementById("age").classList.add("input-error");
      	    validForm = false;
      }




      if(data.ocupation !="" && data.ocupation.length > 3){

       	 document.getElementById("ocupation").classList.remove("input-error");
      

      }else{
      	    // this doesn't match
      	    document.getElementById("ocupation").classList.add("input-error");
      	    validForm = true;
      }
      

return validForm;

}


document.getElementById("age").addEventListener("keyup", function(event){
	var acceptedKey = [48,49,50,51,52,53,54,55,56,57,8];
	var isKeyOk = false;
	for(var i = 0; i < acceptedKey.length; i++){
		if(event.keyCode == acceptedKey[i]) {
			isKeyOk = true;
		}
	}

    var age = document.getElementById("age")
	if(isKeyOk){

	}else{
		age.value = age.value.slice(0, age.value.length-1)
	}if(age.lenfth >2){
		age.value = age.value.slice(0, age.value.length-1)
	}
})


document.getElementsByClassName("button-submit")[0].addEventListener("click", function(){
     gatherData();
});