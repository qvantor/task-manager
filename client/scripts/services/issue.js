(function () {
  'use strict';

  angular.module('app.services')
    .factory('issueService', issue);

  issue.$inject = ['req'];

  function issue(req) {
    function create(data) {
      return req.option('issues', null, 'POST', data);
    }

    return {
      create: create
    };
  }

})();
