(function () {
  'use strict';

  angular.module('app.services')
    .factory('projectService', project);

  project.$inject = ['req'];

  function project(req) {
    function create(data) {
      return req.option('projects', null, 'POST', data);
    }

    function getProjectFields(id) {
      return req.option('projects/getProjectFields/' + id, null, 'GET', null, true);
    }

    return {
      create: create,
      getProjectFields: getProjectFields
    };
  }

})();
