$ = require("jquery");
jQuery = require('jquery');

var properties = $('#properties');
var backgroundGray = $('.background-gray');
var pageWrap = $('.page-wrap');

// if (properties.length > 0 || backgroundGray.length > 0) {
// 		pageWrap.addClass('background-gray');
// }

$( "#summary_expander" ).click(function() {
	event.preventDefault();
	if ($('#summary_icon').hasClass('fa-plus-circle')) {
		$('#summary_icon').removeClass('fa-plus-circle');
		$('#summary_icon').addClass('fa-minus-circle');
		$('.read-more').html('Read Less');
	}
	else if ($('#summary_icon').hasClass('fa-minus-circle')) {
		$('#summary_icon').removeClass('fa-minus-circle');
		$('#summary_icon').addClass('fa-plus-circle');
		$('.read-more').html('Read More');
	}
  $( "#summary_expanded" ).slideToggle( "slow", function() {

  });
});

$('.facebooks').click(function() {
	event.preventDefault();
	FB.ui(
 {
  method: 'share',
  href: 'https://developers.facebook.com/docs/'
}, function(response){});
});

// Set Height of Insight Tiles
$(document).ready(function() {
  // Get an array of all element heights
  if ($('.insight-tile').length) {
	  var elementHeights = $('.insight-tile').map(function() {
	    return $(this).height();
	  }).get();

	  // Math.max takes a variable number of arguments
	  // `apply` is equivalent to passing each height as an argument
	  var maxHeight = Math.max.apply(null, elementHeights);

	  // Set each height to the max height
	  $('.insight-tile').height(maxHeight);  	
  }
});

$(document).ready(function() {
  // Get an array of all element heights
  if ($('.press-item').length) {
	  var elementHeights = $('.press-item').map(function() {
	    return $(this).height();
	  }).get();

	  // Math.max takes a variable number of arguments
	  // `apply` is equivalent to passing each height as an argument
	  var maxHeight = Math.max.apply(null, elementHeights);

	  // Set each height to the max height
	  $('.press-item').height(maxHeight);  	
  }
});

// Sticky Sidebar
$("aside").stick_in_parent();

// Nav Active Status Toggle
function currentRemove () {
	$('.current').toggleClass('muted');
}

$('nav a').hover( currentRemove, currentRemove );



