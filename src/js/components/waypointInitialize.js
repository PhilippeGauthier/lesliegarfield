var Aside = $('aside');

// if (Body.length) {
// 	console.log('foo');
// }

// var waypoint = new Waypoint({
//   element: Body,
//   handler: function() {
//     console.log('Basic waypoint triggered')
//   }
// });

var sticky = new Waypoint.Sticky({
  element: Aside,
  handler: function() {
    console.log('Basic waypoint triggered')
  },
  offset: -138 
});