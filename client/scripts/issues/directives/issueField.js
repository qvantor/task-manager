(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('issueField', issueField);

  issueField.$inject = ['projectService'];

  function issueField(project) {
    var directive = {
      restrict: 'EA',
      scope: {
        issueField: '=issueField',
        projectId: '='
      },
      templateUrl: 'scripts/issues/templates/issueField.html',
      link: link
    };
    return directive;

    function link(s, e) {
      init();
      function init() {
        project.getProjectFields(s.projectId).then(function (data) {
          for (var key in data.workflow.fields) {
            if (data.workflow.fields[key].id === s.issueField.fieldId) {
              s.field = data.workflow.fields[key];
              break;
            }
          }
        });
      }
    }
  }
})
();
