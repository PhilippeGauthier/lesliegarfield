var Aside = $('aside');
var Header = $('header');


// if (Aside.length) {
// 	var aside = new Waypoint.Sticky({
// 	  element: Aside,
	  
// 	  handler: function() {
// 	    console.log('Basic waypoint triggered')
// 	  },
// 	  offset: -138 
// 	});	
// }


var header = new Waypoint.Sticky({
  element: Header,
  wrapper: '<div class="sticky-wrapper" />',
  handler: function() {
		Header.toggleClass('slideInDown animated nav-down');
  },
  offset: -76
});
