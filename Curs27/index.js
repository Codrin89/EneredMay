function getStarships() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var data = JSON.parse(xhttp.responseText).results;
			for (var i = 0; i < data.length; i++) {
				renderStarships(data[i]);
			}
			attachEvents();
		}
	};
	xhttp.open("GET" , "https://swapi.co/api/starships/", true);
	xhttp.send();
}

function attachEvents() {
	var buttons = document.getElementsByTagName('button');
	for (var i = 0 ; i < buttons.length ;  i++) {
		buttons[i].addEventListener('click' , function() {
			var id = this.getAttribute('data-id')
			window.location.href = "starships.html?id=" + id;
		});
	}
}
getStarships();

function renderStarships(data) {
	console.log(data);
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute('class' , 'card');

	var nameElement = document.createElement('h3');
	var nameText = document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	makeDiv.appendChild(nameElement);

	var buttonElement = document.createElement('button');
	var buttonText = document.createTextNode('See more');
	var id = data.url.split('/')
	buttonElement.setAttribute('data-id' , id[id.length - 2]);
	buttonElement.appendChild(buttonText)
	makeDiv.appendChild(buttonElement);

	document.getElementById('cards').appendChild(makeDiv);


}