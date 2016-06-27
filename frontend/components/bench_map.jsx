const React = require('react'),
      ReactDOM = require('react-dom'),
      BenchStore = require('../stores/bench_store'),
      BenchActions = require('../actions/bench_actions');

const BenchMap = React.createClass({
  getInitialState() {
      return {
          benches: BenchStore.all()  
      };
  },

  componentDidMount() {
    // Render map
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);  
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.map.addListener("idle", function(){BenchActions.fetchAll();});

    // Add event listener to BenchStore
    this.benchStoreListener = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.benchStoreListener.remove();  
  },

  _onChange(){
    this.setState({ benches: BenchStore.all() });
  },

  createMarkers() {
    const markers = [];
    const benches = this.state.benches;

    Object.keys(benches).forEach(idString => {
      const id = parseInt(idString);
      const markerLatLng = new google.maps.LatLng(benches[id].lat, benches[id].lng);

      const marker = new google.maps.Marker({
        position: markerLatLng,
        title: benches[id].title,
        map: this.map
      });

      markers.push(marker);
    });

    return markers;
  },

  render() {
    this.createMarkers();

    return (
      <div className="map" ref="map">
      </div>
    );
  }
});

module.exports = BenchMap;