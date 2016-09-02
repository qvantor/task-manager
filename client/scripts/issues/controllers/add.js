(function () {
  'use strict';

  angular
    .module('app.issues')
    .controller('addIssueCtrl', addIssueCtrl);

  addIssueCtrl.$inject = ['projectService', '$state'];

  function addIssueCtrl(project, $state) {
    var vm = this;
    vm.issue = {
      deadline: new Date()
    };
    vm.dateOptions = {
      minDate: vm.issue.deadline,
      open: false
    };

    vm.openDatePicker = openDatePicker;

    project.getProjectFields($state.params.id).then(function (data) {
      vm.fields = data;
    });

    function openDatePicker() {
      vm.dateOptions.open = true;
    }
  }
})();

