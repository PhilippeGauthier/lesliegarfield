// var Aside = $('aside');
var secondaryNav = $('#secondary-nav');


var header = new Waypoint.Sticky({
  element: secondaryNav,
  wrapper: '<div class="sticky-wrapper" />',
  handler: function() {
		
  },
  offset: 78
});
