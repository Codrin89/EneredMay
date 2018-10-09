function getStarship() {

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var starships = JSON.parse(xhr.responseText).results;
			for(var i = 0 ; i < starships.length ; i++) {
				renderStarships(starships[i]);
			}
			attachEvents();
		}
	}

	xhr.open("GET", "https://swapi.co/api/starships", true);
	xhr.send();
}


function attachEvents() {
	var buttons = document.getElementsByTagName('button');
	for (var i=0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			var id=this.getAttribute('data-id')
			window.location.href ="index1.html?id=" + id;
		});

		
	}
}




getStarship();


function renderStarships(data) {
	console.log(data);
	var makeDiv = document.createElement('div');
	makeDiv.setAttribute('class', 'card')

	var nameElement = document.createElement ('h3');
	var nameText = document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	makeDiv.appendChild(nameElement);

	var buttonElement = document.createElement('button');
	var buttonText = document.createTextNode('See more');
	buttonElement.setAttribute('data-id',data.url.split('/')[data.url.split('/').length-2]);
	buttonElement.appendChild(buttonText);
	makeDiv.appendChild(buttonElement);
 

	document.getElementById('cards').appendChild(makeDiv);	 	

}