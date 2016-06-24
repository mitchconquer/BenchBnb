const React  = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchActions = require('./actions/bench_actions');
const BenchIndex = require('./components/bench_index');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<BenchIndex />, document.getElementById('content'));
});

window.BenchStore = BenchStore;
window.BenchActions = BenchActions;