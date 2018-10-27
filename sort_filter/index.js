var products = [];

function loadProducts(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.status === 200 && xhr.readyState === 4){
			products = JSON.parse(xhr.responseText).dataObjects;
			renderProductsOnPage(products);
		}
	}	
  xhr.open("GET", "data.json", true);
  xhr.send();

}
loadProducts();



function renderProductsOnPage(productsArray){
	console.log(productsArray);
	document.getElementById("cards").innerHTML = "";

	for(var i = 0; i < productsArray.length ; i++){

		// productsArray[i] = {
		// 	"title": "Televizor Sony",
		// 	"price": 3500,
		// 	"category": "televizoare",
		// 	"img": "",
		// 	"stock": 20,
		// 	"offer": "0%"
		
		// }

		var containerDiv = document.createElement("div");
		containerDiv.setAttribute( "class" , "card col-md-4 col-xs-6 col-lg-3" );


		var imgTag = document.createElement("img");
		imgTag.setAttribute("src", productsArray[i].img);


		var title = document.createElement("h3");
		var titleText = document.createTextNode(productsArray[i].title);
		title.appendChild(titleText);


		var category = document.createElement("p");
		var categoryText = document.createTextNode(productsArray[i].category);
		category.appendChild(titleText);


		var stock = document.createElement("p");
		if(productsArray[i].stock > 0){
			var stockText = document.createTextNode("In stock " + productsArray[i].stock +  " left")
		}else{
			var stockText = document.createTextNode("not in stock");
		}

		stock.appendChild(stockText)

		var price = document.createElement("p");
		var pricetext = document.createTextNode(productsArray[i].price);
		price.appendChild(pricetext);


		containerDiv.appendChild(imgTag);
		containerDiv.appendChild(title);
		containerDiv.appendChild(category);
		containerDiv.appendChild(stock);
		containerDiv.appendChild(price);

		if(productsArray[i].offer !== "0"){
			var newprice = document.createElement("p");
			var newpriceText = document.createTextNode(productsArray[i].price * ((100 - productsArray[i].offer)/100));
			newprice.appendChild(newpriceText);
			containerDiv.appendChild(newprice);
		}

		document.getElementById("cards").appendChild(containerDiv);
	}  

};


document.getElementById("sort-ascending-price").addEventListener("click", function(){
	console.log(products)
	products.sort(function(a,b){
		return a.price - b.price;
	});
	renderProductsOnPage(products);
});



document.getElementById("sort-descending-price").addEventListener("click", function(){
	console.log(products)
	products.sort(function(a,b){
		return b.price - a.price;
	});
	renderProductsOnPage(products);
});




document.getElementById("sort-alphabetical-name").addEventListener("click", function(){
	console.log(products)
	products.sort(function(a,b){
		return a.title.toLowerCase() > b.title.toLowerCase();
	});
	renderProductsOnPage(products);
});




document.getElementById("show-only-laptop").addEventListener("click", function(){
	
	var z = products.filter(function(product){
		return product.category === "laptop"
	});
	renderProductsOnPage(z);
});