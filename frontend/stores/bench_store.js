const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _benches = {};

const BenchStore = new Store(AppDispatcher);

BenchStore.all = function() {
  return Object.assign({}, _benches);
};

function resetAllBenches(benches) {
  _benches = {};
  for (let key in benches) {
    if (benches.hasOwnProperty(key)) {
      _benches[key] = benches[key];
    }
  }
};

module.exports = BenchStore;