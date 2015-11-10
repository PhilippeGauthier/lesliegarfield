var React = require('react');

var Listing = React.createClass({
  componentDidMount: function() {
    $('.prop-price').currency({
      decimals: 0
    });
    $('.sqft').currency({
      decimals: 0,
      hidePrefix: true
    });
  },
  componentDidUpdate: function() {
    $('.prop-price').currency({
      decimals: 0
    });
    $('.sqft').currency({
      decimals: 0,
      hidePrefix: true
    });
  },
  render: function() {
    var listing = this.props.listing;
    var listingURL = window.location.origin + listing.url;
    var divStyle = {
      backgroundImage: 'url(' + listing.preview_image + ')'
    };
    function createMarkup() { return {__html: 'ft<sup>2</sup>'}; };
    if (listing.streeteasy_status !='Active') {
      listing.bottom_info = listing.streeteasy_status;
    }
    if (listing.openhouse == 1) {
      listing.bottom_info_red = 'Open House';
      listing.bottom_info = "";
    }

    return (
      <li className='grid-item property_tile'>
        <a href={listingURL} className='property_box'>
        <div className="image-wrap">
        <div className='preview-image' style={divStyle}></div>
        </div>
          
          <div className='property_tile_info'>

            <div className='top-info'>
              <span className="prop-title">{listing.title}</span>
              <div className='spacer'></div>
              <span className="prop-price">{listing.price}</span>
              <div className='spacer'></div>
              <span className="prop-details">{listing.property_type}</span>
              <span className="prop-details">
                <span className="sqft-details sqft">{listing.sqft}</span>
                <span className="sqft-details sup" dangerouslySetInnerHTML={createMarkup()} />
              </span>
              <div className='spacer'></div>    
              <span className="prop-location">{listing.property_location}</span>          
            </div>

            <div className='bottom-info'>
              <div>{listing.bottom_info}</div>
              <div className='red'>{listing.bottom_info_red}</div>
            </div>

          </div>
        </a>
      </li>
    );
  }
});

module.exports = Listing;
