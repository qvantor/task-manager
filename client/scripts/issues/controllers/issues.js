(function () {
  'use strict';

  angular
    .module('app.issues')
    .controller('issuesCtrl', issuesCtrl);

  issuesCtrl.$inject = ['$scope', '$state', 'issueService', 'projectService'];

  function issuesCtrl($scope, $state, issue, project) {
    var vm = this;
    vm.issues = [];
    vm.loaded = false;
    vm.updateFields = updateFields;

    vm.filters = {
      fitems: {}
    };

    project.getProjectFields($state.params.id).then(function (data) {
      vm.loaded = true;
      vm.filters.projectId = data.id;
      vm.project = data;
    });

    $scope.$watch('vm.filters', function (current, original) {
      if (vm.loaded)
        updateFilters();
    }, true);

    function updateFields(data) {
      issue.updateFields(data).then(updateFilters);
    }

    function updateFilters() {
      issue.search(vm.filters).then(function (data) {
        vm.issues = data;
      });
    }
  }
})();

