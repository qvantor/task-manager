(function () {
  'use strict';

  angular
    .module('app.wizard')
    .controller('projectCtrl', projectCtrl);

  projectCtrl.$inject = ['$scope', 'teamService', 'workflowService', 'projectService'];

  function projectCtrl($scope, team, workflow, project) {
    var vm = this;

    vm.project = {};

    vm.createAlias = createAlias;
    vm.createProject = createProject;

    getTeams();
    getWorkflows();

    function createAlias() {
      if (vm.project.name) {
        var words = [];
        vm.project.name.split(' ').forEach(function (item) {
          words.push(item.slice(0, 1));
        });
        vm.project.alias = words.join('').slice(0, 3);
      }
    }

    function getTeams() {
      team.getAll().then(function (data) {
        vm.teamList = data;
      });
    }

    function getWorkflows() {
      workflow.getAll().then(function (data) {
        vm.workflowList = data;
      });
    }

    function createProject() {
      if ($scope.form.$valid) {
        project.create(vm.project).then(function (data) {
          console.log(data);
        });
      }
    }
  }
})();
