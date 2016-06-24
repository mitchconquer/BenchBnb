const BenchApiUtil = require('../util/bench_api_util'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      BenchConstants = require('../constants/bench_constants');

const BenchActions = {
  fetchAllBenches() {
    BenchApiUtil.fetchAllBenches(this.receiveAllBenches);
  },

  fetchAll() {
    this.fetchAllBenches();
  },

  receiveAllBenches(benches) {
    console.log(benches);
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};
module.exports = BenchActions;