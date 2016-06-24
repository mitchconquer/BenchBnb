const AppDispatcher = require('../dispatcher/dispatcher');

const BenchApiUtil = {
  fetchAllBenches(successCallback) {
    $.ajax({
      url: 'api/benches',
      method: 'GET',
      dataType: 'json',
      success: successCallback
    });
  }
};

module.exports = BenchApiUtil;