(function () {
  'use strict';

  angular.module('app.services')
    .factory('teamService', team);

  team.$inject = ['req'];

  function team(req) {

    function create(data) {
      return req.option('teams', null, 'POST', data);
    }

    return {
      create: create
    };
  }

})();
