(function () {
  'use strict';

  angular.module('app.core')
    .factory('httpInterceptor', httpInterceptor);

  httpInterceptor.$inject = ['$cookies'];

  function httpInterceptor($cookies) {
    return {
      request: function (config) {
        if (/\.html/g.test(config.url)) {
          return config;
        }

        if ($cookies.get('accessTokenId')) {
          config.headers['X-Access-Token'] = $cookies.get('accessTokenId');
          config.headers['id'] = $cookies.get('currentUserId');
        }

        return config;
      }
    };
  }

})();
