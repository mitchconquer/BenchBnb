const React = require('react'),
      BenchMap = require('./bench_map'),
      BenchIndex = require('./bench_index');

const Search = React.createClass({
  render () {
    return (
      <div className="search">
        <div className="map-pane">
          <BenchMap />
        </div>
        <div className="bench-index-pane">
          <BenchIndex />
        </div>
      </div>
    );
  }
});

module.exports = Search;