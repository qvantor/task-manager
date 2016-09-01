(function () {
  'use strict';

  angular
    .module('app.issues')
    .controller('addIssueCtrl', addIssueCtrl);

  addIssueCtrl.$inject = [];

  function addIssueCtrl() {
    var vm = this;
    vm.issue = {};
  }
})();

