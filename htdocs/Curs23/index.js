function getPeople(personNumber) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			renderCard(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", "https://swapi.co/api/people/"+personNumber+'/', true);
	xhttp.send();
}
getPeople(2);
getPeople(5);
getPeople(3);
getPeople(8);
getPeople(12);
getPeople(1);

function renderCard(data) {
	var containerDiv = document.createElement ('div');
	containerDiv.setAttribute('class', 'card col-md-4 col-lg-3 col-xs-6');

	var nameElement = document.createElement('h3');
	var nameText = document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	containerDiv.appendChild(nameElement);

	var hair_colorElement = document.createElement('p');
	var hair_colorText = document.createTextNode("Hair: " + data.hair_color);
	hair_colorElement.appendChild(hair_colorText);
	containerDiv.appendChild(hair_colorElement);

	var skin_colorElement = document.createElement('p');
	var skin_colorText = document.createTextNode("Skin Color: " + data.skin_color);
	skin_colorElement.appendChild(skin_colorText);
	containerDiv.appendChild(skin_colorElement);

	var heightElement = document.createElement('p');
	var heightText = document.createTextNode("Height: " + data.height);
	heightElement.appendChild(heightText);
	containerDiv.appendChild(heightElement);

	var massElement = document.createElement('p');
	var massText = document.createTextNode("Mass: " + data.mass);
	massElement.appendChild(massText);
	containerDiv.appendChild(massElement);

	var eye_colorElement = document.createElement('p');
	var eye_colorText = document.createTextNode("Eye color: " + data.eye_color);
	eye_colorElement.appendChild(eye_colorText);
	containerDiv.appendChild(eye_colorElement);

	document.getElementById('cards').appendChild(containerDiv);
}
