


var Child = React.createClass({
  render: function(){
    return (
      <div>
        and this be the <b>{this.props.name}</b>.
      </div>
    )
  }
});
 
var foo = "bars";

module.exports = Child;

