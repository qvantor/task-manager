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
        replyOn: '='
      },
      templateUrl: 'scripts/issues/templates/commentsList.html',
      link: link
    };
    return directive;

    function link(s) {
      s.setReply = setReply;

      function setReply(id) {
        if (s.replyOn === id) {
          s.replyOn = null;
        } else {
          s.replyOn = id;
        }
      }
    }
  }
})
();
