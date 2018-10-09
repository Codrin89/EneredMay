
function getStarship () {

	var xhr =new XMLHttpRequest();

	xhr.onreadystatechange=function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var starships=JSON.parse(xhr.responseText).results;
			for(var i=0; i<starships.length; i++) {
			renderStarships(starships[i]);
		  }
		  attachEvents();
		}
	}
		xhr.open("GET", "https://swapi.co/api/starships",true);
		xhr.send();
}
	function attachEvents() {
	var buttons=document.getElementsByTagName('button');
	for(var i=0; i<buttons.length; i++) {
		buttons[i].addEventListener('click', function () {
			var id=this.getAttribute('data-id')
			window.location.href="curs261.html?id=" +id;
		});

	}
}
getStarship();

function renderStarships(data) {
	var makeDiv=document.createElement('div');
	makeDiv.setAttribute('class','card');

	var nameElement=document.createElement('h3');
	var nameText=document.createTextNode(data.name);
	nameElement.appendChild(nameText);
	makeDiv.appendChild(nameElement);

	var buttonElement=document.createElement('button');
	var buttonText =document.createTextNode('See more');
	var id=data.url.split('/');
	buttonElement.setAttribute('data-id',id[id.length - 2]);
	buttonElement.appendChild(buttonText);
	makeDiv.appendChild(buttonElement);

	document.getElementById('cards').appendChild(makeDiv);
}

