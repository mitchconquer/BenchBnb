const React  = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchApiUtil = require('./util/bench_api_util');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<div>Oh hai!</div>, document.getElementById('content'));
});

window.BenchStore = BenchStore;
window.BenchApiUtil = BenchApiUtil;