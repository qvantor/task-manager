(function () {
  'use strict';

  angular
    .module('app.wizard')
    .directive('workflowEditor', workflowEditor);

  workflowEditor.$inject = ['workflowService'];

  function workflowEditor(workflow) {
    var directive = {
      restrict: 'EA',
      scope: {},
      templateUrl: 'scripts/wizard/templates/workflow.html',
      link: link
    };
    return directive;

    function link(scope, element) {
      scope.workflow = {};
      scope.editable = false;

      getAll();
      scope.getWithFields = getWithFields;

      scope.saveWorkflow = saveWorkflow;

      scope.editableMode = editableMode;
      scope.unEditableMode = unEditableMode;

      scope.fieldsEdit = {
        addField: addField,
        removeField: removeField
      };

      function getAll() {
        workflow.getAll().then(function (data) {
          scope.workflow.list = data;
          scope.workflow.selected = data[0];
          getWithFields();
        });
      }

      function getWithFields() {
        workflow.getWithFields(scope.workflow.selected.id).then(function (data) {
          scope.fullWorkFlow = data;
          scope.fullWorkFlow.replace = true;
        });
      }

      function addField(index) {
        scope.fullWorkFlow.fields.splice(index + 1, 0, {
          title: 'Field' + scope.fullWorkFlow.fields.length,
          items: [{title: 'Item1', order: 0}, {title: 'Item2', order: 1}]
        });
      }

      function removeField(index) {
        scope.fullWorkFlow.fields.splice(index, 1);
      }

      function editableMode() {
        scope.editable = true;
      }

      function unEditableMode() {
        scope.editable = false;
      }

      function saveWorkflow() {
        scope.fullWorkFlow.fields.forEach(function (item, i) {
          item.order = i;
        });
        workflow.createWithFields(scope.fullWorkFlow).then(function (data) {
          scope.editable = false;
        });
      }
    }
  }
})
();
