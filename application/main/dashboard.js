// GET DATA FOR ARTICLES
$(document).ready(function() {
	$.ajax({
	  type: "GET",
	  url: "http://localhost/github_project/EneredMay/api/facts",
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

$('#register').on('click', function() {
	console.log(window.location.href.split('application')[0] + 'application/register/register.html');
	window.location.href = window.location.href.split('application')[0] + 'application/register/register.html';
});

function renderFileData(data) {    
	var div = $('<div class="curiosity"><div class="category"><h3 class="pull-left ">' + data.category + '</h3></div><div><img class=" img img-responsive" src="'+ data.image +'"></div><div class="text"><p class="curiosityText">'+ data.textArea +'</p></div><div class="icons"><div class="row col-xs-12"><div class="col-xs-3"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div><div class="col-xs-3"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></div><div class="col-xs-3"><i class="fa fa-heart-o" aria-hidden="true"></i></div><div class="col-xs-3"><i class="fa fa-comments" aria-hidden="true"></i></div></div></div><div class="comment-section"><textarea class="comment-textarea form-control">Write your comment here...</textarea><button class="btn btn-success">Submit comment</button></div></div>');
	$('#article-container').append(div);
}