(function () {
  'use strict';

  angular
    .module('app.issues')
    .controller('addIssueCtrl', addIssueCtrl);

  addIssueCtrl.$inject = ['projectService', '$state', 'issueService'];

  function addIssueCtrl(project, $state, issue) {
    var vm = this;
    vm.issue = {
      deadline: new Date(),
      projectId: $state.params.id,
      fields: []
    };
    vm.dateOptions = {
      minDate: vm.issue.deadline,
      open: false
    };

    vm.openDatePicker = openDatePicker;
    vm.create = create;

    project.getProjectFields($state.params.id).then(function (data) {
      vm.project = data;
    });

    function create() {
      issue.create({data: vm.issue})
        .then(function (data) {
          $state.go('project.issues');
        });
    }

    function openDatePicker() {
      vm.dateOptions.open = true;
    }
  }
})();

