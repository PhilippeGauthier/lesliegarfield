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
		$('span').html('Read Less');
	}
	else if ($('#summary_icon').hasClass('fa-minus-circle')) {
		$('#summary_icon').removeClass('fa-minus-circle');
		$('#summary_icon').addClass('fa-plus-circle');
		$('span').html('Read More');
	}
  $( "#summary_expanded" ).slideToggle( "slow", function() {
    // Animation complete.

  });
});

