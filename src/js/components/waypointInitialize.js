// var Aside = $('aside');

if ($('.secondary-nav').length) {
	var secondaryNav = $('.secondary-nav');
	var header = new Waypoint.Sticky({
	  element: secondaryNav,
	  wrapper: '<div class="sticky-wrapper" />',
	  handler: function() {
			
	  },
	  offset: 78
	});
}

$('#email-trigger').waypoint(function() {
    $('#email-popup').addClass('show');
}, {
    offset: '-1'
});

// if ($('.faq-list').length) {
// 	var secondaryNav = $('.faq-list');
// 	var header = new Waypoint.Sticky({
// 	  element: secondaryNav,
// 	  wrapper: '<div class="sticky-wrapper" />',
// 	  handler: function() {
			
// 	  },
// 	  offset: 150
// 	});
// }
