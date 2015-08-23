$ = require("jquery");
jQuery = require('jquery');
var React = require('react');


// Custom JS
var Custom = require('./components/Custom.js');

// Slick Carousel
var Slick = require('./components/Slick.js');
var slickInitialize = require('./components/slickInitialize.slick.js');

// Currency Conversion
var Currency = require('./components/Currency.js');

var Fotorama = require('./components/Fotorama.js');

// React Components
var elem = $('#properties');
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

	  React.render(<Shell />, document.getElementById('properties'));
	};

	// start up the app by loading in JSON file of properties
	loadJSON('JSON/properties.json', function(properties) {
	  startApp(properties);
	}); 
}





 
