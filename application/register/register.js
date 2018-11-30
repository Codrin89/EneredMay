document.getElementById("register").addEventListener('click', function() {

	//validate fields
	if(!document.getElementById('password').value === document.getElementById('password2').value) {
		// set error fields to password fields
	}
	if(document.getElementById('username').value.trim().length === 0) {
		//set error to username
		document.getElementById('username').parentElement.classList += ' has-error';
	}
	if(document.getElementById('email').value.trim().length === 0) {
		//set error to email
	}
	if(document.getElementById('password').value.trim().length === 0) {
		//set error to password
	}
	if(document.getElementById('password2').value.trim().length === 0) {
		//set error to password2
	}
	var data = {
		"username": document.getElementById('username').value,
		"email": document.getElementById('email').value,
		"password": document.getElementById('password').value,
	}

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.status === 200 && xhr.readyState === 4) {
			console.log(JSON.PARSE(xhr.responseText).result);
		}
	}

	xhr.open("POST", 'http://localhost/github_project/EneredMay/api/register', true);
	xhr.send(JSON.stringify(data));
});