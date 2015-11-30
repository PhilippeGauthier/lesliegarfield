$ = require("jquery");
jQuery = require('jquery');

var properties = $('#properties');
var backgroundGray = $('.bg-gray');
var pageWrap = $('.page-wrap');

// if (properties.length > 0 || backgroundGray.length > 0) {
// 		pageWrap.addClass('bg-gray');
// }

$(".report-expander").click(function() {
  event.preventDefault();
  if ($(this).children().first().hasClass('fa-plus-circle')) {
    $(this).children('span').html('FEWER REPORTS');
  }
  else if ($(this).children().first().hasClass('fa-minus-circle')) {
   $(this).children('span').html('MORE REPORTS');
  }
});

$(".read-more-expander").click(function() {
  event.preventDefault();
  if ($(this).children().first().hasClass('fa-plus-circle')) {
    $(this).children('span').html('Read Less');
  }
  else if ($(this).children().first().hasClass('fa-minus-circle')) {
   $(this).children('span').html('Read More');
  }
});

$( ".expander-prev" ).click(function() {
  event.preventDefault();
  if ($(this).children().first().hasClass('fa-plus-circle')) {
    $(this).children().first().removeClass('fa-plus-circle');
    $(this).children().first().addClass('fa-minus-circle');
  }
  else if ($(this).children().first().hasClass('fa-minus-circle')) {
    $(this).children().first().removeClass('fa-minus-circle');
    $(this).children().first().addClass('fa-plus-circle');
  }
  $(this).prev().slideToggle( "slow", function() {

  });
});

$( ".expander-next" ).click(function() {
  event.preventDefault();
  if ($(this).children().first().hasClass('fa-plus-circle')) {
    $(this).children().first().removeClass('fa-plus-circle');
    $(this).children().first().addClass('fa-minus-circle');
  }
  else if ($(this).children().first().hasClass('fa-minus-circle')) {
    $(this).children().first().removeClass('fa-minus-circle');
    $(this).children().first().addClass('fa-plus-circle');
  }
  $(this).next().slideToggle( "slow", function() {

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
  // if ($('.report').length) {
  //   var elementHeights = $('.report').map(function() {
  //     return $(this).height();
  //   }).get();

  //   // Math.max takes a variable number of arguments
  //   // `apply` is equivalent to passing each height as an argument
  //   var maxHeight = Math.max.apply(null, elementHeights);

  //   // Set each height to the max height
  //   $('.report').height(maxHeight);   
  // }
});

// Sticky Sidebar
$(".sticky").stick_in_parent();

// sticky_faq
$(".sticky-faq").stick_in_parent({
  offset_top: 140
});

// Nav Active Status Toggle
function currentAdd () {
	$('.current').addClass('muted');
}

function currentRemove () {
	$('.current').removeClass('muted');
}

$('#primary-nav a').hover( currentAdd, currentRemove );

$(document).ready(function() {
	if ($('.secondary-nav').length) {
		$('header').addClass('no-border');
	}
});

// Smooth Scroll

$(function() {
  $('a.smooth[href*=#]:not([href=#])').click(function() {
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

// fb share init
window.fbAsyncInit = function(){
FB.init({
    appId: '1637077719911107', status: true, cookie: true, xfbml: true }); 
};
(function(d, debug){var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if(d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; 
    js.async = true;js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
    ref.parentNode.insertBefore(js, ref);}(document, /*debug*/ false));
function postToFeed(title, desc, url, image){
var obj = {method: 'feed',link: url, picture: 'http://104.131.23.73'+image,name: title,description: desc};
function callback(response){}
FB.ui(obj, callback);
}

$('.fb').click(function(){
elem = $(this);
postToFeed(elem.data('title'), elem.data('desc'), elem.prop('href'), elem.data('image'));

return false;
});

// if ($('#mc-embedded-subscribe-form').length) {
//   $('.subscribe').click(function() {
//     $("#subscribe").toggle(this.checked);
//   })
//   $("input[name='subscribe']").change(function(){
//     if ($('#mc-embedded-subscribe-form').attr('action')) {
//         $('#mc-embedded-subscribe-form').removeAttr('action');
//     } else {
//         $('#mc-embedded-subscribe-form').attr('action', 'action="//lesliegarfield.us12.list-manage.com/subscribe/post?u=5645fb1229acab9604f9f450f&amp;id=8327ab2928"');
//     }
//   });
// }





