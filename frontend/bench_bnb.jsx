const React  = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<div>Oh hai!</div>, document.getElementById('content'));
});

window.BenchStore = BenchStore;