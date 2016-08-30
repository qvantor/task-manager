(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('pickColor', pickColor);

  pickColor.$inject = [];

  function pickColor() {
    var directive = {
      restrict: 'EA',
      scope: {
        color: '=pickColor',
        editable: '='
      },
      templateUrl: 'scripts/layout/templates/pickColor.html'
    };
    return directive;
  }
})
();
