(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('issuesFilters', issuesFilters);

  issuesFilters.$inject = ['projectService'];

  function issuesFilters(project) {
    var directive = {
      restrict: 'EA',
      scope: {
        projectId: '='
      },
      templateUrl: 'scripts/issues/templates/ussuesFilters.html',
      link: link
    };
    return directive;

    function link(s, e) {
      init();
      function init() {
        project.getProjectFields(s.projectId).then(function (data) {
          s.fields = data.workflow.fields;
        });
      }
    }
  }
})
();
