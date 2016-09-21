(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('addComment', addComment);

  addComment.$inject = ['issueService'];

  function addComment(issue) {
    var directive = {
      restrict: 'EA',
      scope: {
        issueId: '@addComment',
        replyOn: '=',
        commentsArray: '=',
        setReply: '='
      },
      templateUrl: 'scripts/issues/templates/addComment.html',
      link: link
    };
    return directive;

    function link(s, e) {
      s.send = send;
      s.comment = {
        text: null,
        issueId: s.issueId,
        parentId: s.replyOn
      };

      function send() {
        issue.addComment(s.comment).then(function (data) {
          data.comments = [];
          s.commentsArray.push(data);

          if (s.setReply) {
            s.setReply(null);
          }
        });
      }
    }
  }
})
();
