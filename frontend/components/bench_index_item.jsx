const React = require('react');

const BenchIndexItem  = React.createClass({
  render() {
    if (this.props.bench) {
      const bench = this.props.bench;
      return (
        <div>
        <p>Description: {bench.description}<br />
           Latitude: {bench.lat}<br />
           Longitude: {bench.lng}</p>
        </div>
      );
    }
    return (<div></div>);
  }
});

module.exports = BenchIndexItem;