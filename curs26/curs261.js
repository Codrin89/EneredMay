

var idStarship=window.location.href.split('?id=')[1];
getStarship(idStarship);


function getStarship(id) {
	var xhr =new XMLHttpRequest();
	xhr.onreadystatechange=function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			renderStarship(JSON.parse(xhr.responseText));
	}
}
	xhr.open("GET", "https://swapi.co/api/starships/" +id + "/",true);
	xhr.send();
}
function renderStarship(data) {
	var makeDiv=document.createElement('div');
	makeDiv.setAttribute('class','card');

	var nameElement=document.createElement('h3');
	var nameText=document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	makeDiv.appendChild(nameElement);

	var modelElement=document.createElement('h4');
	var modelText=document.createTextNode(data.model);
	modelElement.appendChild(modelText);
	makeDiv.appendChild(modelElement);

	var manufacturerElement=document.createElement('h5');
	var manufacturerText=document.createTextNode(data.manufacturer);
	manufacturerElement.appendChild(manufacturerText);
	makeDiv.appendChild(manufacturerElement);

	var cost_in_creditElement=document.createElement('h5');
	var cost_in_creditText=document.createTextNode(data.cost_in_credit);
	cost_in_creditElement.appendChild(cost_in_creditText);
	makeDiv.appendChild(cost_in_creditElement);
	
	var lengthElement=document.createElement('h5');
	var lengthText=document.createTextNode(data.length);
	lengthElement.appendChild(lengthText);
	makeDiv.appendChild(lengthElement);

	document.getElementById('cards').appendChild(makeDiv);

}


