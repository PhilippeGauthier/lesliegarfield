$ = require("jquery");
jQuery = require('jquery');
var React = require('react');
// var ReactDOM = require('react-dom');


// var Cookie = require('./components/Cookie.js');
// var cookieInitialize = require('./components/cookieInitialize.cookie.js');

// Slick Carousel
var Slick = require('./components/Slick.js');
var slickInitialize = require('./components/slickInitialize.slick.js');

// Twitter Widget
// var Twitter = require('./components/Slick.js');

// Currency Conversion
var Currency = require('./components/Currency.js');

var Bootstrap = require('./components/Bootstrap.js');

// Fotorama
// var Fotorama = require('./components/Fotorama.js');

// Waypoints
var Waypoints = require('../../bower_components/waypoints/lib/jquery.waypoints.js');
var Waypoints_Sticky = require('../../bower_components/waypoints/lib/shortcuts/sticky.js');
var waypointInitialize = require('./components/waypointInitialize.js');

// Sticky Kit
var StickyKit = require('./components/StickyKit.js');

var JqueryEasing = require('./components/JqueryEasing.js');

// var GoogleMaps = require('./components/GoogleMaps.js');

// Custom JS
var Custom = require('./components/Custom.js');

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
	        saleProperties: properties.sale,
	        rentalProperties: properties.lease
	      };
	    },
	    render: function() {
	      return (
	        
	          <FilterBar />
	        
	      );
	    }
	  });

	  React.render(<Shell />, document.getElementById('properties'));
	};

	// start up the app by loading in JSON file of properties
	// loadJSON('../JSON/properties.json', function(properties) {
	//   startApp(properties);
	// }); 
	properties = window.data
	startApp(properties)
}



// var cookieInitialize = require('./components/cookieInitialize.js');




 
