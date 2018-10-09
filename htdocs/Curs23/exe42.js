function getFileData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			for(var i = 0 ; i < data.length ; i++) {
				renderFileData(data[i]);
			}
		}
	};
	xhttp.open("GET", "data.json", true);
	xhttp.send();

}
getFileData();
    

function renderFileData(data) {
	var containerDiv = document.createElement("div");
	containerDiv.setAttribute('class', 'row');

	var firstNameDiv = document.createElement('div');
	firstNameDiv.setAttribute('class', 'col-xs-2');
	var firstNameText = document.createTextNode(data.firstName);
	firstNameDiv.appendChild(firstNameText);
	containerDiv.appendChild(firstNameDiv);


	document.getElementById('list').appendChild(containerDiv);
	
	var lastNameDiv = document.createElement('div');
	lastNameDiv.setAttribute('class', 'col-xs-2');
	var lastNameText = document.createTextNode(data.lastName);
	lastNameDiv.appendChild(lastNameText);
	containerDiv.appendChild(lastNameDiv);


	document.getElementById('list').appendChild(containerDiv);
	
	var salaryDiv = document.createElement('div');
	salaryDiv.setAttribute('class', 'col-xs-2');
	var salaryText = document.createTextNode(data.salary);
	salaryDiv.appendChild(salaryText);
	containerDiv.appendChild(salaryDiv);


	document.getElementById('list').appendChild(containerDiv);
	
}