function gatherData() {
	var objectData = {
		"first_name":document.getElementById("first_name").value,
		"last_name":document.getElementById("last_name").value,
		"nickname":document.getElementById("nickname").value,
		"age":document.getElementById("age").value,
		"occupation":document.getElementById("occupation").value
	}
	var validForm = validateData(objectData);
	if (validForm) {
		console.log(objectData);
	}else{
		alert('It is not valid!');
	}
}

function validateData(data) {
		//validate first name,at least 3 letters and no numbers
		var stringRegEx = new RegExp("^([^0-9]*)$");
		if(data.first_name != "" && data.first_name.match(stringRegEx)) {
			//this is a match
			document.getElementById("first_name").classList.remove('input-error');
		}else{
			//this doesn't match
			validForm = false;
			document.getElementById("first_name").classList.add('input-error');	
		}
		if(data.last_name != "" && data.last_name.length > 5) {
			document.getElementById("last_name").classList.remove('input-error');
		}else{
			validForm = false;
			document.getElementById("last_name").classList.add('input-error');
		}
		if(data.nickname != "" && data.nickname.length > 7) {
			document.getElementById("nickname").classList.remove('input-error');
		}else{
			validForm = false;
			document.getElementById("nickname").classList.add('input-error');
		}
		if(data.occupation != "" && data.occupation.length > 2) {
			document.getElementById("occupation").classList.remove('input-error');
		}else{
			validForm = false;
			document.getElementById("occupation").classList.add('input-error');
		}


}

document.getElementById('age').addEventListener('keyup' , function(event) {
	var acceptedKey = [48,49,50,51,52,53,54,55,56,57,8];
	var isKeyOk = false;
	for (var i = 0 ; i < acceptedKey.length ; i++){
		if(event.keyCode == acceptedKey[i]){
			isKeyOk = true;
		}
	}
	var age = document.getElementById("age").value;
	if(isKeyOk) {

	}else{
		validForm = false;
		age.slice(0,(age.length - 1));
    }
    if(age.length >2) {
    	age.value = age.value.length(0, age.value.length - 1);
    }
});

document.getElementsByClassName('button-submit')[0].addEventListener('click', function() {
	gatherData();
});
