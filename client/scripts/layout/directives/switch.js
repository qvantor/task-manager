(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('switch', sw);

  sw.$inject = [];

  function sw() {
    var directive = {
      restrict: 'EA',
      scope: {
        value: '=switch'
      },
      templateUrl: 'scripts/layout/templates/switch.html'
    };
    return directive;

  }
})
();
