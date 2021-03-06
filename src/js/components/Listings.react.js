var React = require('react');
var Listing = require('../components/Listing.react');
var _ = require('lodash');

var Listings = React.createClass({
  render: function() {
    var rows = _.map(this.props.listings, function(listing, i) {
      return (<Listing listing={listing} key={i} value={i}/>);
    });

    return (
      <section className="bg-gray property_grid">
        <div className='container'>
        <ul className='grid properties'>
          {rows}
        </ul>
        </div>
      </section>
    );
  }
});

module.exports = Listings;
