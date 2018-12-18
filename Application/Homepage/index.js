$(document).ready(function() {
	$.ajax({
	  type: "GET",
	  url: "http://localhost/Trello/EneredMay/api/products",
	  contentType: "application/json",
	  success: function(response) {
	  	const data = JSON.parse(response);
	  	createProductsCard(data);
	  },
	  error: function(error) {
		console.log(error);
	  }
	});
});
$("#signout").click(function() {
	window.localStorage.removeItem('loginToken');
	var path = window.location.href.split('Application')[0];
	window.location.href = path + 'Application/register/register.html';
});
$("#account").click(function() {
	var token = window.localStorage.getItem('loginToken');
	if(token && token.length === 50) {
	var path = window.location.href.split('Application')[0];
	window.location.href = path + 'Application/account/account.html';
	}
});
$("#mycart").click(function() {
	var token = window.localStorage.getItem('loginToken');
	if(token && token.length === 50) {
	var path = window.location.href.split('Application')[0];
	window.location.href = path + 'Application/mycart/mycart.html';
	}
});

function createProductsCard() {
	
}