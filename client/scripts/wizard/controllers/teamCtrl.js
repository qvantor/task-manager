(function () {
  'use strict';

  angular
    .module('app.wizard')
    .controller('teamCtrl', teamCtrl);

  teamCtrl.$inject = ['$scope', 'teamService', 'userService', '$state'];

  function teamCtrl($scope, team, user, $state) {
    var vm = this;
    vm.team = {
      name: null,
      list: []
    };

    vm.remove = remove;
    vm.createTeam = createTeam;

    function remove(item) {
      vm.team.list.splice(item, 1);
    }

    function createTeam() {
      if ($scope.form.$valid) {
        team.create({name: vm.team.name}).then(function (data) {
          vm.team.id = data.id;
          user.inviteInTeam({list: vm.team.list}).then(function (data) {
            $state.go('wizard.workflow');
          });
        })
      }
    }

  }
})();
