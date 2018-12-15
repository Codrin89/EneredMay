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
