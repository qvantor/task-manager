(function () {
  'use strict';

  angular.module('app.services')
    .factory('workflowService', workflow);

  workflow.$inject = ['req'];

  function workflow(req) {
    function getAll() {
      return req.option('workflows', null, 'GET', null, true);
    }

    function getWithFields(id) {
      return req.option('/Workflows/getWithFields/' + id, null, 'GET', null, true);
    }

    return {
      getAll: getAll,
      getWithFields: getWithFields
    };
  }

})();
