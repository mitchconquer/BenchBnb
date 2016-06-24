const React  = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchActions = require('./actions/bench_actions');
const Search = require('./components/search');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Search />, document.getElementById('content'));
});

window.BenchStore = BenchStore;
window.BenchActions = BenchActions;