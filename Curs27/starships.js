var idStarShip = window.location.href.split('?id=')[1];
getStarships(idStarShip);


function getStarships(id) {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			
			renderStarship(JSON.parse(xhttp.responseText));
		}
	};
	xhttp.open("GET" , "https://swapi.co/api/starships/" + id + "/", true);
	xhttp.send();
}

function renderStarship(data) {
	console.log(data);
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute('class' , 'card');

	var nameElement = document.createElement('h3');
	var nameText = document.createTextNode('Name:' + data.name);
	nameElement.appendChild(nameText);
	makeDiv.appendChild(nameElement);

	var cargo_capacityElement = document.createElement('h3');
	var cargo_capacityText = document.createTextNode('Cargo capacity:' + data.cargo_capacity);
	cargo_capacityElement.appendChild(cargo_capacityText);
	makeDiv.appendChild(cargo_capacityElement);

	var consumablesElement = document.createElement('h3');
	var consumablesText = document.createTextNode('Consumables:' + data.consumables);
	consumablesElement.appendChild(consumablesText);
	makeDiv.appendChild(consumablesElement);

	var cost_in_creditsElement = document.createElement('h3');
	var cost_in_creditsText = document.createTextNode('Cost in credits:' + data.cost_in_credits);
	cost_in_creditsElement.appendChild(cost_in_creditsText);
	makeDiv.appendChild(cost_in_creditsElement);

	var createdElement = document.createElement('h3');
	var createdText = document.createTextNode('Created:' + data.created);
	createdElement.appendChild(createdText);
	makeDiv.appendChild(createdElement);

	var crewElement = document.createElement('h3');
	var crewText = document.createTextNode('Crew:' + data.crew);
	crewElement.appendChild(crewText);
	makeDiv.appendChild(crewElement);

	var editedElement = document.createElement('h3');
	var editedText = document.createTextNode('Edited:' + data.edited);
	editedElement.appendChild(editedText);
	makeDiv.appendChild(editedElement);

	var hyperdrive_ratingElement = document.createElement('h3');
	var hyperdrive_ratingText = document.createTextNode('Hyperdrive rating:' + data.hyperdrive_rating);
	hyperdrive_ratingElement.appendChild(hyperdrive_ratingText);
	makeDiv.appendChild(hyperdrive_ratingElement);

	var lengthElement = document.createElement('h3');
	var lengthText = document.createTextNode('Length:' + data.length);
	lengthElement.appendChild(lengthText);
	makeDiv.appendChild(lengthElement);

	var manufacturerElement = document.createElement('h3');
	var manufacturerText = document.createTextNode('Manufacturer:' + data.manufacturer);
	manufacturerElement.appendChild(manufacturerText);
	makeDiv.appendChild(manufacturerElement);

	var max_atmosphering_speedElement = document.createElement('h3');
	var max_atmosphering_speedText = document.createTextNode('Max atmosphering speed:' + data.max_atmosphering_speed);
	max_atmosphering_speedElement.appendChild(max_atmosphering_speedText);
	makeDiv.appendChild(max_atmosphering_speedElement);

	var modelElement = document.createElement('h3');
	var modelText = document.createTextNode('Model:' + data.model);
	modelElement.appendChild(modelText);
	makeDiv.appendChild(modelElement);

	
	
document.getElementById('cards').appendChild(makeDiv);

}
