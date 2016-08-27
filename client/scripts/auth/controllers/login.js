(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('loginCtrl', login);

  login.$inject = ['auth'];

  function login(auth) {
    var vm = this;

    auth.checkLogin();

    vm.login = login;

    function login() {
      auth.login(vm.user).then(function () {

      });
    }
  }
})();
