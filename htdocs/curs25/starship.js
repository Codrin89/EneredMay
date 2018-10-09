var idStarship = window.location.href.split('?id=')[1];
getStarship(idStarship);


function getStarship(id) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			renderStarship(JSON.parse(xhttp.responseText));
		}
	};
	xhttp.open("GET", "https://swapi.co/api/starships/" + id + "/", true);
	xhttp.send();
}

function renderStarship(data){
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

	var MGLTElement = document.createElement('p');
	var MGLTText = document.createTextNode("MGLT: " + data.MGLT);
	MGLTElement.appendChild(MGLTText);
	containerDiv.appendChild(MGLTElement);

	var cargo_capacityElement = document.createElement('p');
	var cargo_capacityText = document.createTextNode("Cargo capacity: " + data.cargo_capacity);
	cargo_capacityElement.appendChild(cargo_capacityText);
	containerDiv.appendChild(cargo_capacityElement);

	var consumablesElement = document.createElement('p');
	var consumablesText = document.createTextNode("Consumables: " + data.consumables);
	consumablesElement.appendChild(consumablesText);
	containerDiv.appendChild(consumablesElement);

	var createdElement = document.createElement('p');
	var createdText = document.createTextNode("Created: " + data.created);
	createdElement.appendChild(createdText);
	containerDiv.appendChild(createdElement);

	var crewElement = document.createElement('p');
	var crewText = document.createTextNode("Crew: " + data.crew);
	crewElement.appendChild(crewText);
	containerDiv.appendChild(crewElement);

	var hyperdrive_ratingElement = document.createElement('p');
	var hyperdrive_ratingText = document.createTextNode("Hyperdrive rating: " + data.hyperdrive_rating);
	hyperdrive_ratingElement.appendChild(hyperdrive_ratingText);
	containerDiv.appendChild(hyperdrive_ratingElement);

	var filmsElement = document.createElement('a');
	filmsElement.setAttribute('href', data.films[0]);
	var filmsText = document.createTextNode("Films: " + data.films);
	filmsElement.appendChild(filmsText);
	containerDiv.appendChild(filmsElement);

	document.getElementById('cards').appendChild(containerDiv);
}