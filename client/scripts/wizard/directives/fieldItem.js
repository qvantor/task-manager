(function () {
  'use strict';

  angular
    .module('app.wizard')
    .directive('fieldItem', fieldItem);

  fieldItem.$inject = [];

  function fieldItem() {
    var directive = {
      restrict: 'EA',
      scope: {
        field: '=fieldItem',
        editable: '='
      },
      templateUrl: 'scripts/wizard/templates/fieldItem.html',
      link: link
    };
    return directive;

    function link(scope, element) {

    }
  }
})
();
