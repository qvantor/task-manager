(function () {
  'use strict';

  angular
    .module('app.issues')
    .controller('issuesCtrl', issuesCtrl);

  issuesCtrl.$inject = ['$scope', 'issueService'];

  function issuesCtrl($scope, issue) {
    var vm = this;
    vm.issues = [];
    vm.filters = {
      fitems: {}
    };

    $scope.$watch('vm.filters', function (current, original) {
      issue.search(vm.filters).then(function (data) {
        vm.issues = data;
      });
    }, true);
  }
})();

