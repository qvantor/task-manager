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
        projectId: '=',
        filters: '=issuesFilters'
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

      s.select = select;

      function select(item, field) {
        if (s.filters[field.id]) {
          for (var i = 0; i < s.filters[field.id].length; i++) {
            if (s.filters[field.id].indexOf(item.id) >= 0) {
              s.filters[field.id].splice(s.filters[field.id].indexOf(item.id), 1);
              selectedItems();
              return;
            }
          }
        }
        s.filters[field.id] ? s.filters[field.id].push(item.id) : s.filters[field.id] = [item.id];
        selectedItems();
      }

      function selectedItems() {
        s.selectedItems = [];
        for (var key in s.filters) {
          s.selectedItems = s.selectedItems.concat(s.filters[key]);
        }
      }
    }
  }
})
();
