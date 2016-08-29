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

      scope.fieldsEdit = {
        addField: addField,
        removeField: removeField
      };

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

      function addField(index) {
        scope.fullWorkFlow.fields.splice(index + 1, 0, {
          title: 'Field' + scope.fullWorkFlow.fields.length,
          items: [{title: 'Item1', color: null}, {title: 'Item2', color: null}]
        });
      }

      function removeField(index) {
        scope.fullWorkFlow.fields.splice(index, 1);
      }
    }
  }
})
();
