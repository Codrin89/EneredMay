function getStarships() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText).results;
			for(var i = 0 ; i < data.length ; i++) {
				renderStarships(data[i]);
			}
			attachEvents();
		}
	};
	xhttp.open("GET", "https://swapi.co/api/starships/", true);
	xhttp.send();
}

function attachEvents() {
	var buttons = document.getElementsByTagName('button');
	for(var i=0 ; i<buttons.length; i++){
		buttons[i].addEventListener('click', function(){
			var id = this.getAttribute('data-id')
			window.location.href = "starship.html?id=" + id;
		});
	}
}

getStarships();
function renderStarships(data) {
	var containerDiv = document.createElement ('div');
	containerDiv.setAttribute('class', 'card col-md-4 col-lg-3 col-xs-6');

	var nameElement = document.createElement('h3');
	var nameText = document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	containerDiv.appendChild(nameElement);

	var modelElement = document.createElement('p');
	var modelText = document.createTextNode("Model " + data.model);
	modelElement.appendChild(modelText);
	containerDiv.appendChild(modelElement);

	var manufacturerElement = document.createElement('p');
	var manufacturerText = document.createTextNode("Manufacturer: " + data.manufacturer);
	manufacturerElement.appendChild(manufacturerText);
	containerDiv.appendChild(manufacturerElement);

	var cost_in_creditsElement = document.createElement('p');
	var cost_in_creditsText = document.createTextNode("Cost in credits: " + data.cost_in_credits);
	cost_in_creditsElement.appendChild(cost_in_creditsText);
	containerDiv.appendChild(cost_in_creditsElement);

	var buttonElement = document.createElement('button');
	var buttonText = document.createTextNode('See more');
	buttonElement.setAttribute('data-id', data.url.split('/')[data.url.split('/').length - 2]);
	buttonElement.appendChild(buttonText);
	containerDiv.appendChild(buttonElement);

	document.getElementById('cards').appendChild(containerDiv);
}