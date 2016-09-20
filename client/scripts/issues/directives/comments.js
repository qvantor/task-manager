(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('comments', comments);

  comments.$inject = ['issueService'];

  function comments(issue) {
    var directive = {
      restrict: 'EA',
      scope: {
        issue: '=comments'
      },
      templateUrl: 'scripts/issues/templates/comments.html',
      link: link
    };
    return directive;

    function link(s, e) {
      init();

      function init() {
        issue.comments(s.issue).then(function (data) {
          s.comments = data;
        });
      }
    }
  }
})
();
