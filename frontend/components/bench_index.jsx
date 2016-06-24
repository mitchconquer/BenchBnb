const React = require('react'),
      BenchStore = require('../stores/bench_store'),
      BenchIndexItem = require('./bench_index_item'),
      BenchMap = require('./bench_map');

const BenchIndex = React.createClass({
  getInitialState() {
    return { benches: BenchStore.all() }
  },
  
  _onChange() {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount() {
    this.storeListener = BenchStore.addListener(this._onChange);  
  },

  componentWillUnmount() {
    this.storeListener.remove();  
  },

  render() {
    if (this.state.benches) {
      const benches = Object.keys(this.state.benches).map(id => {
        const bench = this.state.benches[parseInt(id)];
        return <BenchIndexItem bench={bench} key={bench.id} />
      });

      return (
        <div className="benches-index-pane">
          {benches}
        </div>
      );
    }
    return (<div></div>);
  }
});

module.exports = BenchIndex;