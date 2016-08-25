(function () {
  'use strict';

  angular.module('app.core')
    .factory('req', req);

  function req($http) {
    var factory = {
      option: option
    };
    return factory;

    function option(url, params, method, data, cache) {
      var req = {
        method: method || 'GET',
        url: 'api/' + url,
        params: params || null,
        data: data || null,
        cache: cache || false
      };
      return $http(req).then(Complete);

      function Complete(response) {
        return response.data;
      }
    }
  }

  req.$inject = ['$http'];
})();
