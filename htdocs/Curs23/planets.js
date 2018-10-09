function getPlanets(planetsNumber) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			renderCard(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", "https://swapi.co/api/planets/"+planetsNumber+'/', true);
	xhttp.send();
}
getPlanets(2);
getPlanets(5);
getPlanets(3);
getPlanets(8);
getPlanets(12);
getPlanets(1);

function renderCard(data) {
	var containerDiv = document.createElement ('div');
	containerDiv.setAttribute('class', 'card col-md-4 col-lg-3 col-xs-6');

	var nameElement = document.createElement('h3');
	var nameText = document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	containerDiv.appendChild(nameElement);

	var rotation_periodElement = document.createElement('p');
	var rotation_periodText = document.createTextNode("Rotation period " + data.rotation_period);
	rotation_periodElement.appendChild(rotation_periodText);
	containerDiv.appendChild(rotation_periodElement);

	var orbital_periodElement = document.createElement('p');
	var orbital_periodText = document.createTextNode("Orbital period: " + data.orbital_period);
	orbital_periodElement.appendChild(orbital_periodText);
	containerDiv.appendChild(orbital_periodElement);

	var diameterElement = document.createElement('p');
	var diameterText = document.createTextNode("Diameter: " + data.diameter);
	diameterElement.appendChild(diameterText);
	containerDiv.appendChild(diameterElement);

	var climateElement = document.createElement('p');
	var climateText = document.createTextNode("Climate: " + data.climate);
	climateElement.appendChild(climateText);
	containerDiv.appendChild(climateElement);

	var gravityElement = document.createElement('p');
	var gravityText = document.createTextNode("Gravity: " + data.gravity);
	gravityElement.appendChild(gravityText);
	containerDiv.appendChild(gravityElement);

	document.getElementById('cards').appendChild(containerDiv);
}