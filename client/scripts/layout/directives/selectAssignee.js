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
        team: '=selectAssignee',
        assigned: '='
      },
      templateUrl: 'scripts/layout/templates/selectAssignee.html',
      link: link
    };
    return directive;

    function link(scope, element, attr) {
      team.getUsers(scope.team)
        .then(function (data) {
          scope.users = data;

          if (scope.assigned)
            data.forEach(function (user) {
              scope.assigned.forEach(function (assigned) {
                if (assigned.userId === user.id) {
                  user.assigned = true;
                }
              });
            });
        });

      scope.selectItem = selectItem;

      function selectItem(item) {
        item.assigned = item.assigned ? !item.assigned : true;
        countAssigned();
      }

      function countAssigned() {
        scope.assigned = [];
        scope.users.forEach(function (user) {
          if (user.assigned) {
            if (attr.return === 'array')
              scope.assigned.push(user.id);
            else
              scope.assigned.push({userId: user.id});
          }
        });
      }
    }
  }
})
();
