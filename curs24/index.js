//SELECTORS

console.log($('.row'));
console.log($('p'));

//for loop by default
$('p').html('This is a paragraph');

var rows = $('.row');
console.log(rows[0].clientWidth);

rows.click(function() {
	alert();
});
rows.on('click', function() {
	console.log('this is on click');
});

var element = $('<h3>This is a heading</h3>');
$('.container').append(element);

$('p').css('background-color', 'black');

$('p').html('<h4>Something</h4>');
$('p.paragraph').text('<h4>Something else</h4>');