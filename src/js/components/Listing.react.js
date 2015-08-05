var React = require('react');

var Listing = React.createClass({
  render: function() {
    var listing = this.props.listing;
    return (
      <div className='col-md-4'>
        <a className='property_box'>
          <img src={listing.preview_image} />
          <div className='property_tile_info'>
            <div className='top-info'>
              <h3>{listing.title}</h3>
              <div className='spacer'></div>
              <h4>${listing.price}</h4>
              <div className='spacer'></div>
              <h4>{listing.sqft} sq. ft</h4>
              <div className='spacer'></div>              
              <h4>{listing.property_type}</h4>
              <div className='spacer'></div>
              <h4>{listing.location}</h4>
            </div>
            <div className='bottom-info'>
              <p>{listing.open_house}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
});

module.exports = Listing;
