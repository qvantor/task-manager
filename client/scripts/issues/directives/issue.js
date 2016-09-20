(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('issue', issue);

  issue.$inject = [];

  function issue() {
    var directive = {
      restrict: 'EA',
      scope: {
        issue: '='
      },
      templateUrl: 'scripts/issues/templates/issue.html',
      link: link
    };
    return directive;

    function link(s, e) {

    }
  }
})
();
