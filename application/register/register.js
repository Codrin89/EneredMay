// document.getElementById("register").addEventListener('click', function() {

// 	//validate fields
// 	if(!document.getElementById('password').value === document.getElementById('password2').value) {
// 		// set error fields to password fields
// 	}
// 	if(document.getElementById('username').value.trim().length === 0) {
// 		//set error to username
// 		document.getElementById('username').parentElement.classList += ' has-error';
// 	} else {

// 	}
// 	if(document.getElementById('email').value.trim().length === 0) {
// 		//set error to email
// 	}
// 	if(document.getElementById('password').value.trim().length === 0) {
// 		//set error to password
// 	}
// 	if(document.getElementById('password2').value.trim().length === 0) {
// 		//set error to password2
// 	}
// 	var data = {
// 		"username": document.getElementById('username').value,
// 		"email": document.getElementById('email').value,
// 		"password": document.getElementById('password').value,
// 	}

// 	var xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = function() {
// 		if(xhr.status === 200 && xhr.readyState === 4) {
// 			console.log(xhr.responseText);
// 		}
// 	}
// 	xhr.open("POST", 'http://localhost/Trello/EneredMay/api/register', true);
// 	xhr.send(JSON.stringify(data));
// });

$('#register').on('click', function() {

	// validate inputs example
	if($('#rUsername').val().trim().length === 0) {
		$($('#rUsername')[0].parentElement).addClass('has-error');
	} else {
		$($('#rUsername')[0].parentElement).removeClass('has-error');
	}

	if($('#rPassword').val().trim().length === 0) {
		$($('#rPassword')[0].parentElement).addClass('has-error');
	} else {
		$($('#rPassword')[0].parentElement).removeClass('has-error');
	}

	if($('#rEmail').val().trim().length === 0) {
		$($('#rEmail')[0].parentElement).addClass('has-error');
	} else {
		$($('#rEmail')[0].parentElement).removeClass('has-error');
	}

	if($('#rPassword2').val().trim().length === 0) {
		$($('#rPassword2')[0].parentElement).addClass('has-error');
	} else {
		$($('#rPassword2')[0].parentElement).removeClass('has-error');
	}

	if($('#rUsername').val().trim().length === 0) {
		$($('#rUsername')[0].parentElement).addClass('has-error');
	} else {
		$($('#rUsername')[0].parentElement).removeClass('has-error');
	}

	if($('#rPassword').val() != $('#rPassword2').val()) {
		$($('#rPassword')[0].parentElement).addClass('has-error');
		$($('#rPassword2')[0].parentElement).addClass('has-error');
		return;
	} else {
		$($('#rPassword')[0].parentElement).removeClass('has-error');
		$($('#rPassword2')[0].parentElement).removeClass('has-error');
	}

	if($('.register-form .has-error').length > 0) {
		return false;
	}


	var data = {
		"email": $('#rEmail').val(),
		"username": $('#rUsername').val(),
		"password": $('#rPassword').val()
	}

	$.ajax({
	  type: "POST",
	  url: "http://localhost/Trello/EneredMay/api/register",
	  data: JSON.stringify(data),
	  success: function(response) {
	  	console.log(response);
	  },
	  error: function(error) {
	
	  },
	  dataType: "application/json"
	});


});

$('#goToSignIn').on('click', function() {
	$('.register-form').addClass('displayNone');
	$('.signin-form').removeClass('displayNone');
});

$('#goToRegister').on('click', function() {
	$('.register-form').removeClass('displayNone');
	$('.signin-form').addClass('displayNone');
});