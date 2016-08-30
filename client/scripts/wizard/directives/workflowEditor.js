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
        });
      }

      function addField(index) {
        scope.fullWorkFlow.fieldsList.splice(index + 1, 0, {
          title: 'Field' + scope.fullWorkFlow.fieldsList.length,
          itemsList: [{title: 'Item1', color: null}, {title: 'Item2', color: null}]
        });
      }

      function removeField(index) {
        scope.fullWorkFlow.fieldsList.splice(index, 1);
      }

      function editableMode() {
        scope.editable = true;
        scope.fullWorkFlow.name = 'New workflow (' + scope.fullWorkFlow.name + ')';
      }

      function unEditableMode() {
        scope.editable = false;
        scope.fullWorkFlow.name = scope.workflow.selected.name;
      }

      function saveWorkflow() {
        console.log(scope.fullWorkFlow);
        workflow.createWithFields(scope.fullWorkFlow).then(function (data) {
          console.log(data);
        });
      }
    }
  }
})
();
