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

    vm.filters = {
      fitems: {}
    };

    init();
    function init() {
      project.getProjectFields($state.params.id).then(function (data) {
        vm.loaded = true;
        vm.filters.projectId = data.id;
        vm.project = data;
      });
    }
  }
})();

