(function () {
  'use strict';

  angular
    .module('app.wizard')
    .directive('workflowEditor', workflowEditor);

  workflowEditor.$inject = ['workflowService'];

  function workflowEditor(workflow) {
    var directive = {
      restrict: 'EA',
      scope: {
        workflowId: '=workflowEditor'
      },
      templateUrl: 'scripts/wizard/templates/workflow.html',
      link: link
    };
    return directive;

    function link(scope, element) {
      scope.workflow = {};
      scope.editable = true;
      getAll();
      scope.getWithFields = getWithFields;

      function getAll() {
        workflow.getAll().then(function (data) {
          scope.workflow.list = data;
        });
      }

      function getWithFields() {
        workflow.getWithFields(scope.workflowId).then(function (data) {
          scope.fullWorkFlow = data;
        });
      }
    }
  }
})
();
