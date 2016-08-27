(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('signupCtrl', signup);

  signup.$inject = ['auth'];

  function signup(auth) {
    var vm = this;

    auth.checkLogin();

    vm.signup = signup;

    function signup() {
      auth.signup(vm.user);
    }
  }
})();
