var people = [];

function loadPeopleFromServer() {

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.status === 200 && xhr.readyState === 4) {
			//console.log(xhr.responseText);
			var serverData = JSON.parse(xhr.responseText);
			people = serverData.results;
			renderPeopleHTML(people);
			console.log(serverData);
		}
	}
	xhr.open("GET" , "https://swapi.co/api/people" , true);
	xhr.send();

}
loadPeopleFromServer();

function renderPeopleHTML(data) {
	document.getElementById('list').innerHTML = '';
	for(var i = 0; i < data.length; i++) {

		var containerDiv = document.createElement('div');
		containerDiv.setAttribute('class' , 'col-md-3 person-container');

		var headingElement = document.createElement('h3');
		headingElement.setAttribute('class' , 'name text-center text-primary');
		var headingElementText = document.createTextNode(data[i].name);
		headingElement.appendChild(headingElementText);
		containerDiv.appendChild(headingElement);

		var paraElement = document.createElement('p');
		paraElement.setAttribute('class' , 'eye-color text-danger');
		var paraText = document.createTextNode(data[i].eye_color);
		paraElement.appendChild(paraText);
		containerDiv.appendChild(paraElement);

		var paraElement = document.createElement('p');
		paraElement.setAttribute('class' , 'skin-color text-danger');
		var paraText = document.createTextNode(data[i].skin_color);
		paraElement.appendChild(paraText);
		containerDiv.appendChild(paraElement);

		var paraElement = document.createElement('p');
		paraElement.setAttribute('class' , 'birth-year text-warning');
		var paraText = document.createTextNode(data[i].birth_year_text_warning);
		paraElement.appendChild(paraText);
		containerDiv.appendChild(paraElement);

		var paraElement = document.createElement('p');
		paraElement.setAttribute('class' , 'homeworld');
		var paraText = document.createTextNode(data[i].homeworld);
		paraElement.appendChild(paraText);
		containerDiv.appendChild(paraElement);

		document.getElementById('list').appendChild(containerDiv);

	}

}
document.getElementById('sortA').addEventListener('click' , function() {
	people.sort(function(a,b) {
		if(a.name < b.name) {
			return -1;
		} else {
			return 1;
		}
		//return a.name.toLowerCase() > b.name.toLowerCase();
	});
	renderPeopleHTML(people);
});

document.getElementById('sortAD').addEventListener('click' , function() {
	people.sort(function(a,b) {
		if(a.name > b.name) {
			return -1;
		} else {
			return 1;
		}
		//return a.name.toLowerCase() > b.name.toLowerCase();
	});
	renderPeopleHTML(people);
});

document.getElementById('filter1').addEventListener('click' , function(){
	people = people.filter(function(a) {
		return a.eye_color === 'blue';
	});
	renderPeopleHTML(people);
});

document.getElementById('filter2').addEventListener('click' , function(){
	people = people.filter(function(a) {
		return a.skin_color === 'white';
	});
	renderPeopleHTML(people);
});