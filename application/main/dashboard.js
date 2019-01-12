// GET DATA FOR ARTICLES
$(document).ready(function() {
	$.ajax({
	  type: "GET",
	  // http://localhost/github_project -> c://file/xampp/htdocs -> http://localhost
	  // FOLDER_NAME                    
	  // /EneredMay/api/facts -> folders from github
	  url: "http://localhost/github_project/EneredMay/api/facts",
	  success: function(response) {
	  	var data = JSON.parse(response);
	  	var datakeys = Object.keys(data);
	  	for(var i = 0 ; i < datakeys.length ; i++) {
	  		renderFileData(data[datakeys[i]]);
	  	}
	  	attachEvents();
	  }
	});
});

$('.triggerExpand').on('click', function() {
	if($('.expandMenu').hasClass('visibleNone')) {
		$('.expandMenu').removeClass('visibleNone');
	} else {
		$('.expandMenu').addClass('visibleNone');
	}
});


$('#startPlay').on('click', function() {
	window.location.href = window.location.href.split('application')[0] + 'application/gameMode/gameMode.html';
});
$('#goToLogin').on('click', function() {
	window.location.href = window.location.href.split('application')[0] + 'application/register/register.html';
});


function renderFileData(data) {    
	var div = $('<div class="curiosity"><div class="category"><h3 class="pull-left ">' + data.category + '</h3></div><div><img class=" img img-responsive" src="'+ data.image +'"></div><div class="text"><p class="curiosityText">'+ data.textArea +'</p></div><div class="icons"><div class="row col-xs-12"><div class="col-xs-3"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div><div class="col-xs-3"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></div><div class="col-xs-3"><i class="fa fa-heart-o" aria-hidden="true"></i></div><div class="col-xs-3"><i class="fa fa-comments triggerComments" aria-hidden="true"></i></div></div></div><div class="comment-section displayNone"><textarea class="comment-textarea form-control">Write your comment here...</textarea><button class="btn btn-success">Submit comment</button></div></div>');
	$('#article-container').append(div);
}

$('#register').on('click', function() {
	var data = {
		"username": $('#username').val(),
		"email": $('#email').val(),
		"password": $('#password').val(),
	}

	if(data.username.length < 5) {
		$($('#username')[0].parentElement).addClass('has-error');	
	} else {
		$($('#username')[0].parentElement).removeClass('has-error');
	}

	if(validateEmail(data.email)) {
		$($('#email')[0].parentElement).removeClass('has-error');
	} else {
		$($('#email')[0].parentElement).addClass('has-error');
	}

	if(data.password.trim().length === 0 && data.password.length > 5){
		$($('#password')[0].parentElement).removeClass('has-error');
	}else{
		$($('#password')[0].parentElement).addClass('has-error');
	}

	if(document.getElementById('password').value === document.getElementById('password2').value){
		$($('#password')[0].parentElement).removeClass('has-error');
		$($('#password2')[0].parentElement).removeClass('has-error');
	}else{
		$($('#password')[0].parentElement).addClass('has-error');
		$($('#password2')[0].parentElement).addClass('has-error');
	}


	$.ajax({
	  type: "POST",
	  // github_project\EneredMay\EneredMay\api
	  url: "http://localhost/github_project/EneredMay/api/register",
	  data: JSON.stringify(data),
	  success: function(response) {
	  	var response = JSON.parse(response);
	  	if(response.result) {
  			$('#register-modal').modal('hide');
	  		$('#login-modal').modal('show');
	  	} else {
	  		$('#register-modal').modal('hide');
	  		$('#error-register-modal').modal('show');
	  	}
	  }
	});

});

$('#login').on('click', function() {
	var data = {
		"username": $('#Lusername').val(),
		"password": $('#Lpassword').val(),
	}

	if(data.username.length < 5) {
		$($('#username')[0].parentElement).addClass('has-error');	
	} else {
		$($('#username')[0].parentElement).removeClass('has-error');
	}

	if(validateEmail(data.email)) {
		$($('#email')[0].parentElement).removeClass('has-error');
	} else {
		$($('#email')[0].parentElement).addClass('has-error');
	}

	if(data.password.trim().length === 0 && data.password.length > 5){
		$($('#password')[0].parentElement).removeClass('has-error');
	}else{
		$($('#password')[0].parentElement).addClass('has-error');
	}


	$.ajax({
	  type: "POST",
	  // github_project\EneredMay\EneredMay\api
	  url: "http://localhost/github_project/EneredMay/api/login",
	  data: JSON.stringify(data),
	  success: function(response) {
	  	if(response.split('token:').length > 0) {
	  		window.localStorage.setItem('token',response.split('token:')[1]);
  			$('#login-modal').modal('hide');
	  	}	
	  }
	});

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function attachEvents() {
	$('.triggerComments').click(function () {
		if($(this.parentElement.parentElement.parentElement.parentElement).find('.comment-section').hasClass('displayNone')) {
			$(this.parentElement.parentElement.parentElement.parentElement).find('.comment-section').removeClass('displayNone');
		} else {
			$(this.parentElement.parentElement.parentElement.parentElement).find('.comment-section').addClass('displayNone');
		}
		
	});
}