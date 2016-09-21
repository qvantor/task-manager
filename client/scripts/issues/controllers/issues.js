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
    vm.openIssue = openIssue;

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
      if ($state.params.issue) {
        scrollToIssue($state.params.issue);
      }
    }

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

    function openIssue(issue) {
      if ($state.params.issue != issue.id) {
        $state.go('project.issues', {issue: issue.id}, {notify: false});
        scrollToIssue(issue.id);
      } else {
        $state.go('project.issues', {issue: null}, {notify: false});
      }
    }

    function scrollToIssue(id) {
      setTimeout(function () {
        $("body").animate({scrollTop: $('#issue' + id).offset().top}, 200);
      }, 100);
    }
  }
})();

