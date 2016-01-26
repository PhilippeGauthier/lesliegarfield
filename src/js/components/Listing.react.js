var React = require('react');

var Listing = React.createClass({
  componentDidMount: function() {
    $('.price').currency({
      decimals: 0,
      hidePrefix: true
    });
    $('.sqft').currency({
      decimals: 0,
      hidePrefix: true
    });
  },
  componentDidUpdate: function() {
    $('.price').currency({
      decimals: 0,
      hidePrefix: true
    });
    $('.sqft').currency({
      decimals: 0,
      hidePrefix: true
    });
  },
  render: function() {
    var listing = this.props.listing;
    var divStyle = {
      backgroundImage: 'url(' + listing.preview_image + ')'
    };
    function createMarkup() { return {__html: 'ft<sup>2</sup>'}; };
    if (listing.streeteasy_status == 'active') {
      listing.streeteasy_status = "";
    }
    if (listing.streeteasy_status == 'sold') {
      listing.streeteasy_status = "Sold";
    }
    if (listing.streeteasy_status === 'in-contract' ) {
      listing.streeteasy_status = "In Contract";
    }
    if (listing.streeteasy_status == 'temp-off-market') {
      listing.streeteasy_status = "";
    }
    if (listing.streeteasy_status == 'off-market') {
      listing.streeteasy_status = "";
    }
    if (listing.openhouse == "true" ) {
      listing.bottom_info_red = 'Open House';
      listing.bottom_info = "";
    }
    if (listing.currency == "dollars") {
      listing.currency = "$";
    }
    if (listing.currency == "sterling") {
      listing.currency = "£";
    }
    if (listing.currency == "dollars") {
      listing.currency = "€";
    }
    if (listing.currency == "none") {
      listing.currency = "";
    }
    if (listing.currency == null) {
      listing.currency = "$";
    }
    if (listing.ownernship == "rental") {
      listing.ownership = " /month"
    }
    if (listing.ownership != "rental") {
      listing.owernship = "";
    }
    return (
      <li className='grid-item property_tile'>
        <a href={listing.url} className='property_box'>
        <div className="image-wrap">
        <div className='preview-image' style={divStyle}></div>
        </div>
          
          <div className='property_tile_info'>

            <div className='top-info'>
              <span className="prop-title">{listing.title}</span>
              <div className='spacer'></div>
              <span className="prop-price">
                <span className="currency">{listing.currency}</span>
                <span className="price">{listing.price}</span>
                <span className="ownership">{listing.ownership}</span>
              </span>
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
              <div>{listing.streeteasy_status}</div>
              <div className='red'>{listing.bottom_info_red}</div>
            </div>

          </div>
        </a>
      </li>
    );
  }
});

module.exports = Listing;
