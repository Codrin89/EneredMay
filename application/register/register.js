document.getElementById("register").addEventListener('click', function () {
    //validate fields
    if (!document.getElementById('password').value === document.getElementById('password2').value) {}


    if (document.getElementById('username').value.trim().length === 0) {
        //set error to username
        document.getElementById('username').parentElement.classList += ' has-error';
    } else {
        document.getElementById('username').parentElement.classList.split(' has-error')[0];
    }



    if (document.getElementById('email').value.trim().length === 0) {
        //set error to email
        document.getElementById('username').parentElement.classList += ' has-error';
    }
    if (document.getElementById('password').value.trim().length === 0) {
        //set error to password

    }
    if (document.getElementById('password2').value.trim().length === 0) {
        //set error to password2
    }
    var data = {
        "username": document.getElementById('username').value,
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value
    }

    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            console.log(xhr.responseText);
        }
    }

    xhr.open("POST", 'http://localhost/git/EneredMay/api/register', true);
    xhr.send(JSON.stringify(data));
});
