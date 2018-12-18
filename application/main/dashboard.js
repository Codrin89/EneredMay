// GET DATA FOR ARTICLES
$(document).ready(function() {
	$.ajax({
	  type: "GET",
	  url: "http://localhost/github_project/EneredMay/api/article",
	  success: function(response) {
	  	var data = JSON.parse(response);
	  	var datakeys = Object.keys(data);
	  	for(var i = 0 ; i < datakeys.length ; i++) {
	  		renderFileData(data[datakeys[i]]);
	  	}
	  }
	});
});

$('.triggerExpand').on('click', function() {
	if($('.expandMenu').hasClass('visibleNone')) {
		$('.expandMenu').removeClass('visibleNone');
	} else {
		$('.expandMenu').addClass('visibleNone');
	}
});
$('#startPlay').on('click', function() {
	window.location.href = window.location.href.split('application')[0] + 'application/gameMode/gameMode.html';
});

function renderFileData(data) {
	var containerDiv = document.createElement('div');
	containerDiv.setAttribute('class', 'article');

	var titleDiv= document.createElement('h3');
	titleDiv.setAttribute('class', 'title');
	var titleText = document.createTextNode(data.title);
	titleDiv.appendChild(titleText);
	containerDiv.appendChild(titleDiv);

    var img = document.createElement('img');
	img.setAttribute('class', 'img img-responsive');
	img.setAttribute('src', data.image);
	containerDiv.appendChild(img);


	var textArea = document.createElement('div');
	textArea.setAttribute('class', 'textArea');
	var textAreatext = document.createTextNode(data.textArea);
	textArea.appendChild(textAreatext);
	containerDiv.appendChild(textArea);
	


	document.getElementById('article-container').appendChild(containerDiv);

}