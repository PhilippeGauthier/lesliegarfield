(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/philippe/Sites/gulp-statamic-browserify/src/js/app.js":[function(require,module,exports){


var Parent = require('./components/Parent');
 
React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./components/Parent":"/Users/philippe/Sites/gulp-statamic-browserify/src/js/components/Parent.js"}],"/Users/philippe/Sites/gulp-statamic-browserify/src/js/components/Parent.js":[function(require,module,exports){
var Child = require('./child');
 
var Parent = React.createClass({displayName: "Parent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", null, " This is the parent. "), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});
 
module.exports = Parent;

},{"./child":"/Users/philippe/Sites/gulp-statamic-browserify/src/js/components/child.js"}],"/Users/philippe/Sites/gulp-statamic-browserify/src/js/components/child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function(){
    return (
      React.createElement("div", null, 
        "and this be the ", React.createElement("b", null, this.props.name), "."
      )
    )
  }
});
 
var foo = "sars";

module.exports = Child;

},{}]},{},["/Users/philippe/Sites/gulp-statamic-browserify/src/js/app.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcGhpbGlwcGUvU2l0ZXMvZ3VscC1zdGF0YW1pYy1icm93c2VyaWZ5L3NyYy9qcy9hcHAuanMiLCIvVXNlcnMvcGhpbGlwcGUvU2l0ZXMvZ3VscC1zdGF0YW1pYy1icm93c2VyaWZ5L3NyYy9qcy9jb21wb25lbnRzL1BhcmVudC5qcyIsIi9Vc2Vycy9waGlsaXBwZS9TaXRlcy9ndWxwLXN0YXRhbWljLWJyb3dzZXJpZnkvc3JjL2pzL2NvbXBvbmVudHMvY2hpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7QUFFNUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxNQUFNLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUNKeEQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUUvQixJQUFJLDRCQUE0QixzQkFBQTtFQUM5QixNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHVCQUEyQixDQUFBLEVBQUE7UUFDaEMsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtNQUNqQixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTTs7O0FDYnZCLElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxVQUFVO0lBQ2hCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtBQUFBLFFBQUEsa0JBQUEsRUFDYSxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBUyxDQUFBLEVBQUEsR0FBQTtBQUFBLE1BQ3BDLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDOztBQUVqQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcblxudmFyIFBhcmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9QYXJlbnQnKTtcbiBcblJlYWN0LnJlbmRlcig8UGFyZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsInZhciBDaGlsZCA9IHJlcXVpcmUoJy4vY2hpbGQnKTtcbiBcbnZhciBQYXJlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj4gVGhpcyBpcyB0aGUgcGFyZW50LiA8L2Rpdj5cbiAgICAgICAgPENoaWxkIG5hbWU9XCJjaGlsZFwiLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG4gXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmVudDsiLCJ2YXIgQ2hpbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgYW5kIHRoaXMgYmUgdGhlIDxiPnt0aGlzLnByb3BzLm5hbWV9PC9iPi5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG4gXG52YXIgZm9vID0gXCJzYXJzXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGQ7XG5cbiJdfQ==
