var idStarship = window.location.href.split('?id=')[1];
getStarship(idStarship);

function getStarship(id) {

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			renderStarship(JSON.parse(xhr.responseText));
		}
	}

	xhr.open("GET", "https://swapi.co/api/starships/" + id + "/", true);
	xhr.send();
}


function renderStarship(data) {
	console.log(data);
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute('class', 'card')

	var nameElement = document.createElement ('h3');
	var nameText = document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	makeDiv.appendChild(nameElement);
		 	

	var modelElement = document.createElement ('h4');
	var modelText = document.createTextNode(data.model);
	modelElement.appendChild(modelText);
	makeDiv.appendChild(modelElement);
	 	

	var manufacturerElement = document.createElement ('h5');
	var manufacturerText = document.createTextNode(data.manufacturer);
	manufacturerElement.appendChild(manufacturerText);
	makeDiv.appendChild(manufacturerElement);

	var cost_in_creditsElement = document.createElement ('h6');
	var cost_in_creditsText = document.createTextNode(data.cost_in_credits);
	cost_in_creditsElement.appendChild(cost_in_creditsText);
	makeDiv.appendChild(cost_in_creditsElement);

	var lengthElement = document.createElement ('h7');
	var lengthText = document.createTextNode(data.length);
	lengthElement.appendChild(lengthText);
	makeDiv.appendChild(lengthElement);


	document.getElementById('cards').appendChild(makeDiv);	 	

}