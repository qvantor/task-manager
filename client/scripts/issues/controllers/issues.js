(function () {
  'use strict';

  angular
    .module('app.issues')
    .controller('issuesCtrl', issuesCtrl);

  issuesCtrl.$inject = ['$scope', '$state', 'issueService', 'projectService'];

  function issuesCtrl($scope, $state, issue, project) {
    var vm = this;
    vm.issues = [];
    vm.filters = {
      fitems: {}
    };
    project.getProjectFields($state.params.id).then(function (data) {
      vm.project = data;
    });

    $scope.$watch('vm.filters', function (current, original) {
      issue.search(vm.filters).then(function (data) {
        vm.issues = data;
      });
    }, true);
  }
})();

