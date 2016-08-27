(function () {
  'use strict';

  angular
    .module('app.issues')
    .directive('tabs', tabs);

  tabs.$inject = [];

  function tabs() {
    var directive = {
      restrict: 'EA',
      scope: {
        tabs: '='
      },
      templateUrl: 'scripts/layout/templates/tabs.html',
      link: link
    };
    return directive;

    function link(scope, element) {

    }
  }
})
();
