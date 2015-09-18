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
function currentAdd () {
	$('.current').addClass('muted');
}

function currentRemove () {
	$('.current').removeClass('muted');
}

// function activeAdd () {
// 	$('.active').addClass('muted');
// }

// function activeRemove () {
// 	$('.active').removeClass('muted');
// }

$('#primary-nav a').hover( currentAdd, currentRemove );

$(document).ready(function() {
	if ($('#secondary-nav').length) {
		$('header').addClass('no-border');
	}
});

// Smooth Scroll

$(function() {
  $('a.scroll[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });
});

$(function(){
  $('a.scroll').click(function() {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh');
    });
  });
});

// First Letter Hack for Neighborhood Pricing Titles
    $(document).ready(function()
    {
        // For each of the eachword class
        $(".price-descriptor").each(function()
        {
            // Get the string (html) and split it by " " (like PHP's explode)
            var self         = $(this);
            var theText      = self.html();
            var theTextArray = theText.split(" ");
            
            // Cycle them
            for( var i=0; i<theTextArray.length; i++ )
            {
                // Get this particular word and split it into individual letters
                var thisWord      = theTextArray[i];
                var thisWordArray = thisWord.split("");

                // Wrap the first letter
                if( thisWordArray[0] != "&" )
                {
                    thisWordArray[0]  = "<span class='first-letter'>"+thisWordArray[0]+"</span>";
                }

                // Stitch the letters back up
                theTextArray[i] = thisWordArray.join("");
            }

            // Join the original string back up
            var result = theTextArray.join(" ");

            self.html( result );
        });

    });

