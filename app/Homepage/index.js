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

function createProductsCard(data) {
	data = Object.values(data);
	var currency = window.localStorage.getItem('currency') || 'RON';
	for(var i = 0 ; i <  data.length ; i++) {
		var inStock, inStockClass;
		if(data[i].stock > 0 ) {
			inStock = 'In Stock';
			inStockClass = 'in-stock';
		} else {
			inStock = 'Out of Stock';
			inStockClass = 'out-stock';
		}
		var discount;
		if(data[i].discount > 0 ) {
			discount = '';
		} else {
			discount = 'invisible';
		}
		//var inStock = data[i].stock > 0 ? 'In Stock' : 'Out of Stock';//
		//var discount = data[i].discount > 0 ? '' : 'invisible';
		var product = $('<div class="product col-xs-12 col-sm-6 col-md-4"><div><h4>'+data[i].name+'</h4><img class="img-responsive" src="'+data[i].image+'"/><p class="'+inStockClass+'">'+inStock+'</p><p class="price">Price: <span class="price">'+data[i].price+ ' ' + currency + '</span></p>'+'<p class="'+discount+'">Discounted price: <span>' + ((100 - data[i].discount)/100 * data[i].price) + ' ' + currency + '</span></p>'+'<button class="btn btn-primary">Vezi detalii</button></div></div>');
		$('.products-container').append(product);
	}
}

$('.currency li a').click(function() {
	window.localStorage.setItem('currency', this.innerHTML);
});
