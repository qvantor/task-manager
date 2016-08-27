(function () {
  'use strict';

  angular.module('app.services')
    .factory('userService', user);

  user.$inject = ['req'];

  function user(req) {

    function inviteInTeam(data) {
      return req.option('users/inviteInTeam', null, 'POST', data);
    }

    return {
      inviteInTeam: inviteInTeam
    };
  }

})();
