(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('commentsList', commentsList);

  commentsList.$inject = [];

  function commentsList() {
    var directive = {
      restrict: 'EA',
      scope: {
        comments: '=commentsList',
        reply: '@',
        issueId: '@',
        replyOn: '=',
        setReply: '='
      },
      templateUrl: 'scripts/issues/templates/commentsList.html'
    };
    return directive;
  }
})
();
