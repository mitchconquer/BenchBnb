const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

let _benches = {};

const BenchStore = new Store(AppDispatcher);

function resetAllBenches(benches) {
  _benches = {};
  for (let key in benches) {
    if (benches.hasOwnProperty(key)) {
      _benches[key] = benches[key];
    }
  }
};

BenchStore.all = function() {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "BENCHES_RECEIVED":
      resetAllBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    default:
      break;
  }
};

module.exports = BenchStore;