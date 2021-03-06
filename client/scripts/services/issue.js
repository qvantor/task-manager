(function () {
  'use strict';

  angular.module('app.services')
    .factory('issueService', issue);

  issue.$inject = ['req'];

  function issue(req) {
    function create(data) {
      return req.option('issues', null, 'POST', data);
    }

    function addComment(data) {
      return req.option('issues/' + data.issueId + '/comments', null, 'POST', data);
    }

    function comments(issueId) {
      return req.option('issues/' + issueId + '/comments', null, 'GET');
    }

    function updateFields(data) {
      return req.option('issues/' + data.issueId + '/fields/' + data.id, null, 'PUT', data, true);
    }

    function search(query) {
      return req.option('issues/search', null, 'POST', query, null);
    }

    return {
      create: create,
      search: search,

      addComment: addComment,
      comments: comments,

      updateFields: updateFields
    };
  }

})();
