(function () {
  'use strict';

  angular.module('app.services')
    .factory('issueService', issue);

  issue.$inject = ['req'];

  function issue(req) {
    function create(data) {
      return req.option('issues', null, 'POST', data);
    }

    function search(query) {
      return req.option('issues/search', null, 'POST', query, null);
    }

    return {
      create: create,
      search: search
    };
  }

})();
