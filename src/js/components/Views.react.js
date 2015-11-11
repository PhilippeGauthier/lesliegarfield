var React = require('react');

var Views = React.createClass({
  componentDidMount: function() {
    var url = window.location.pathname +'?view=map';
    $('#map-link').attr('href', url);
  },
  render: function() {
    return (
      <div className='view-type'>
        <ul className='views'>
          <li>
            <a className='active'><i className='fa fa-th-large' />Grid View</a>
          </li>
          <li>
            <a id="map-link"><i className='fa fa-map-marker' />Map View</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Views;
