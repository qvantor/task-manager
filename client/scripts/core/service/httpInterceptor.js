(function () {
  'use strict';

  angular.module('app.core')
    .factory('httpInterceptor', httpInterceptor);

  httpInterceptor.$inject = ['conf', '$cookies'];

  function httpInterceptor(conf, $cookies) {
    return {
      request: function (config) {
        if (/\.html/g.test(config.url)) {
          return config;
        }

        config.url = conf.url + config.url;

        if ($cookies.get('accessTokenId')) {
          config.headers['X-Access-Token'] = $cookies.get('accessTokenId');
          config.headers['id'] = $cookies.get('currentUserId');
        }

        return config;
      }
    };
  }

})();
