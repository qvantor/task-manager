(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('issuesList', issuesList);

  issuesList.$inject = ['$state', 'issueService'];

  function issuesList($state, issue) {
    var directive = {
      restrict: 'EA',
      scope: {
        filters: '=issuesList',
        project: '='
      },
      templateUrl: 'scripts/issues/templates/issuesList.html',
      link: link
    };
    return directive;

    function link(s, e) {
      s.$state = $state;
      s.openIssue = openIssue;
      s.updateFields = issue.updateFields;

      s.filters.limit = 20;
      s.filters.offset = 0;


      init();
      function init() {
        if ($state.params.issue) {
          scrollToIssue($state.params.issue);
        }
      }

      s.$watch('filters', function (current, original) {
        if (s.filters.projectId) {
          loadIssues();
        }
      }, true);

      function loadIssues() {
        issue.search(s.filters).then(function (data) {
          s.issues = data;
        });
      }

      function openIssue(issue) {
        if ($state.params.issue != issue.id) {
          $state.go('project.issues', {issue: issue.id}, {notify: false});
          scrollToIssue(issue.id);
        } else {
          $state.go('project.issues', {issue: null}, {notify: false});
        }
      }

      function scrollToIssue(id) {
        setTimeout(function () {
          $("body").animate({scrollTop: $('#issue' + id).offset().top}, 200);
        }, 100);
      }
    }
  }
})
();
