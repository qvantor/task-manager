(function () {
  'use strict';

  angular.module('app.services')
    .factory('teamService', team);

  team.$inject = ['req'];

  function team(req) {

    function create(data) {
      return req.option('teams', null, 'POST', data);
    }

    function getAll() {
      return req.option('teams', null, 'GET', null, true);
    }

    return {
      create: create,
      getAll: getAll
    };
  }

})();
