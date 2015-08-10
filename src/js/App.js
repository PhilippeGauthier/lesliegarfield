$ = require('jquery');
var React = require('react');


// Slick Carousel
var Slick = require('slick-carousel');
var slickPropertyTile = require('./components/propertyTile.slick.js');

// Currency Conversion
var currency = require('./components/currency.js');
var currencyConversion = require('./components/currencyConversion.js');

// React Components
var elem = $('#app');
if (elem.length) {
	var FilterBar = require('./components/FilterBar.react');

	var loadJSON = function(path, callback) {
	  var xobj = new XMLHttpRequest();
	  xobj.overrideMimeType("application/json");
	  xobj.open('GET', path, true);
	  xobj.onreadystatechange = function() {
	    if (xobj.readyState == 4 && xobj.status == "200") {
	      callback(JSON.parse(xobj.response));
	    }
	  };
	  xobj.send(null);
	};


	var startApp = function(properties) {

	  // shell component for the property grid, could potentially add a Header component here
	  // not doing a header because I'm assuming you already have one for all the other pages of this site
	  var Shell = React.createClass({
	    // I'm imagining I'm going to be passing the properties down to many child generations
	    // of components so using childContextTypes saves me from having to send them as props to
	    // every component
	    childContextTypes: {
	      saleProperties: React.PropTypes.object.isRequired,
	      rentalProperties: React.PropTypes.object.isRequired
	    },
	    getChildContext: function() {
	      return {
	        saleProperties: properties.sale_properties,
	        rentalProperties: properties.rental_properties
	      };
	    },
	    render: function() {
	      return (
	        <div>
	          <FilterBar />
	        </div>
	      );
	    }
	  });

	  React.render(<Shell />, document.getElementById('app'));
	};

	// start up the app by loading in JSON file of properties
	loadJSON('JSON/properties.json', function(properties) {
	  startApp(properties);
	}); 
}





 
