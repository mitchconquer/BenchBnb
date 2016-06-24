const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants.js');

const BenchApiUtil = {
  fetchAll() {
    $.ajax({
      url: 'api/benches',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        console.log(response);
        AppDispatcher.dispatch({
          actionType: BenchConstants.BENCHES_RECEIVED,
          benches: response
        });
      }
    });
  }
};

module.exports = BenchApiUtil;