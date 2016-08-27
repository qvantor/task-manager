(function () {
  'use strict';

  angular.module('app.auth')
    .factory('auth', auth);

  auth.$inject = ['req', '$cookies', '$state'];

  function auth(req, $cookies, $state) {

    function login(data) {
      return req.option('users/login', null, 'POST', data).then(function (data) {
        $cookies.put('accessTokenId', data.id);
        $cookies.put('currentUserId', data.userId);
      });
    }

    function signup(data) {
      req.option('users', null, 'POST', data).then(function (data) {
        $state.go('login');
      });
    }

    function checkLogin() {
      return $cookies.get('accessTokenId') && $cookies.get('currentUserId') ? '' : false;
    }

    function logOut() {
      $cookies.put('accessTokenId', '');
      $cookies.put('currentUserId', '');
      $state.go('login');
    }

    return {
      login: login,
      signup: signup,
      logOut: logOut,
      checkLogin: checkLogin
    };

  }

})();
