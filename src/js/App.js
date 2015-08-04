$ = require('jquery');

// Slick Carousel
var Slick = require('slick-carousel');
var slickPropertyTile = require('./components/propertyTile.slick.js');

// React Components


var elem = $('#app');
if (elem.length) {
	var Parent = require('./components/Parent');
	React.render(<Parent />, document.getElementById('app'));
}

 
