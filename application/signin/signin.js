document.getElementById("login").addEventListener('click', function () {
    //validate fields

    var data = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            console.log(xhr.responseText);
        }
    }

    xhr.open("POST", 'http://localhost/git/EneredMay/api/login', true);
    xhr.send(JSON.stringify(data));
});
