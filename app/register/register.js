$(document).ready(function() {
	var token = window.localStorage.getItem('loginToken');
	if(token && token.length === 50) {
		var path = window.location.href.split('Application')[0];
		window.location.href = path + 'Application/Homepage/index.html';
		// window.location.href = 'Application/Homepage/index.html';
	}
});

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

$('#signin').on('click', function() {

	// validate inputs example
	if($('#sUsername').val().trim().length === 0) {
		$($('#sUsername')[0].parentElement).addClass('has-error');
	} else {
		$($('#sUsername')[0].parentElement).removeClass('has-error');
	}

	if($('#sPassword').val().trim().length === 0) {
		$($('#sPassword')[0].parentElement).addClass('has-error');
	} else {
		$($('#sPassword')[0].parentElement).removeClass('has-error');
	}

	if($('.signin-form .has-error').length > 0) {
		return false;
	}


	var data = {
		"username": $('#sUsername').val(),
		"password": $('#sPassword').val()
	}

	$.ajax({
	  type: "POST",
	  url: "http://localhost/Trello/EneredMay/api/login",
	  data: JSON.stringify(data),
	  contentType: "application/json",
	  success: function(response) {
	  	const data = JSON.parse(response);
	  	if(data.length === 50) {
	  		window.localStorage.setItem('loginToken', data);
	  		var path = window.location.href.split('Application')[0];
			window.location.href = path + 'Application/Homepage/index.html';
	  	}
	  },
	  error: function(error) {
		console.log(error);
	  }
	});


});



// CHANGE VIEW ON SIGNIN/SIGNUP
$('#goToSignIn').on('click', function() {
	$('.register-form').addClass('displayNone');
	$('.signin-form').removeClass('displayNone');
});

$('#goToRegister').on('click', function() {
	$('.register-form').removeClass('displayNone');
	$('.signin-form').addClass('displayNone');
});