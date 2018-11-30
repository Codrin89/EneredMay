document.getElementById("register").addEventListener('click', function() {

  //validate fields


  if (document.getElementById('username').value.trim().length === 0) {
    //set error to username
    // document.getElementById('username').parentElement.classList += ' has-error';
    document.getElementById('username').classList.add('error-border');
    document.getElementById('error-msg').innerHTML = "Invalid username";
    return;
  }

  if (document.getElementById('email').value.trim().length === 0) {
    document.getElementById('email').classList.add('error-border');
    document.getElementById('error-msg').innerHTML = "Invalid email";
    return;
  }
  if (document.getElementById('password').value.trim().length === 0) {
    document.getElementById('password').classList.add('error-border');
    document.getElementById('error-msg').innerHTML = "Invalid password";
    return;
  }
  if (document.getElementById('password2').value.trim().length === 0) {
    document.getElementById('password2').classList.add('error-border');
    document.getElementById('error-msg').innerHTML = "Invalid password";
    return;
  }

  if (document.getElementById('password').value !== document.getElementById('password2').value) {
    document.getElementById('password').classList.add('error-border');
    document.getElementById('password2').classList.add('error-border');
    document.getElementById('error-msg').innerHTML = "Password fields do not match";
    return;
  }

  var data = {
    "username": document.getElementById('username').value,
    "email": document.getElementById('email').value,
    "password": document.getElementById('password').value
  }

  // console.log(data);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.log(xhr.responseText);
    }
  }

  xhr.open("POST", "http://localhost/git/EneredMay/api/register", true);
  xhr.send(JSON.stringify(data));
});

var inputs = document.getElementsByClassName("form-control");

var clearError = function() {
  for (var i = 0; i < 4; i++) {
    inputs[i].classList.remove('error-border');
  }
  document.getElementById('error-msg').innerHTML = "";
};

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', clearError, false);
}