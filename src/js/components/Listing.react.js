var React = require('react');

var Listing = React.createClass({
  componentDidMount: function() {
    $('.price').currency({
      decimals: 0
    });
  },
  render: function() {
    var listing = this.props.listing;
    var listingURL = listing.site_root + listing.url;
    var divStyle = {
      backgroundImage: 'url(' + listing.preview_image + ')'
    };
    return (
      <li className='grid-item property_tile'>
        <a href={listingURL} className='property_box'>
        <div className='preview-image' style={divStyle}></div>
          
          <div className='property_tile_info highlight'>
            <div className='top-info'>
              <h2>{listing.title}</h2>
              <div className='spacer'></div>
              <h3 className="price">{listing.price}</h3>
              <div className='spacer'></div>
              <h4>{listing.property_type}</h4>
              <h4>{listing.sqft} sq. ft</h4>
              <div className='spacer'></div>              
              <h4>{listing.location}</h4>
            </div>
            <div className='bottom-info'>
              <p>{listing.open_house}</p>
            </div>
          </div>
        </a>
      </li>
    );
  }
});

module.exports = Listing;
