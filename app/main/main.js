$(document).ready(function() {
	// LOGO CLICK TO GO TO HOMEPAGE FROM EVERY PAGE
	$('#goToHomepage').click(function(e) {
		e.preventDefault();
		// http://localhost/github/EneredMay/app/search/index.html
		var link = window.location.href.split('app/');
		window.location.href = link[0] + 'app/' + 'main/index.html';
	});
	$.ajax({
	  type: "GET",
	  url: "http://localhost/github/EneredMay/api/products",
	  contentType: "application/json",
	  success: function(response) {
	  	const data = JSON.parse(response);
	  	createCards(data);
	  },
	  error: function(error) {
		console.log(error);
	  }
	});
});

function createCards(data) {
	var values = Object.values(data);
	for(var i = 0 ; i < values.length ; i++) {
		var product = $('<div class="product col-md-4 col-sm-6 col-xs-12"><img class="img-responsive" src="'+values[i].image+'"/><h4 class="title">'+values[i].title+'</h4><p class="date">'+values[i].createdAt+'</p><p class="price">$ '+values[i].price+'</p><p class="description">'+values[i].description+'</p></div>');
		$('.products-container').append(product);
	}
}