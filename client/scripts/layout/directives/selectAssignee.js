(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('selectAssignee', selectAssignee);

  selectAssignee.$inject = ['teamService'];

  function selectAssignee(team) {
    var directive = {
      restrict: 'EA',
      scope: {
        project: '=selectAssignee',
        assigned: '='
      },
      templateUrl: 'scripts/layout/templates/selectAssignee.html',
      link: link
    };
    return directive;

    function link(scope, element) {
      team.getUsers(scope.project)
        .then(function (data) {
          scope.users = data;
        });

      scope.selectItem = selectItem;

      function selectItem(item) {
        item.assigned = item.assigned ? !item.assigned : true;
        countAssigned();
      }

      function countAssigned() {
        scope.assigned = [];
        scope.users.forEach(function (item) {
          if (item.assigned)
            scope.assigned.push(item.id);
        });
      }
    }
  }
})
();
