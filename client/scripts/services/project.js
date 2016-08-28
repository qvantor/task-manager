(function () {
  'use strict';

  angular.module('app.services')
    .factory('projectService', project);

  project.$inject = ['req'];

  function project(req) {
    function create(data) {
      return req.option('projects', null, 'POST', data);
    }

    return {
      create: create
    };
  }

})();
