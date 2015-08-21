var React = require('react');

var Listing = React.createClass({
  componentDidMount: function() {
    $('.price').currency({
      decimals: 0
    });
  },
  render: function() {
    var listing = this.props.listing;
    var listingURL = listing.site_root + listing.folder_location + listing.slugg;
    return (
      <div className='grid-4'>
        <a href={listingURL} className='property_box'>
          <img src={listing.preview_image} />
          <div className='property_tile_info highlight'>
            <div className='top-info'>
              <h3>{listing.title}</h3>
              <div className='spacer'></div>
              <h4 className="price">{listing.price}</h4>
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
