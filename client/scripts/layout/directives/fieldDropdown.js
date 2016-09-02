(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('fieldDropdown', fieldDropdown);

  fieldDropdown.$inject = [];

  function fieldDropdown() {
    var directive = {
      restrict: 'EA',
      scope: {
        data: '=fieldDropdown'
      },
      templateUrl: 'scripts/layout/templates/fieldDropdown.html',
      link: link
    };
    return directive;

    function link(s, e) {
      console.log(s.data);

      var min = 10;
      s.selectItem = selectItem;

      s.data.itemsList.forEach(function (item, i) {
        if (item.order < min) {
          s.selected = item;
          min = item.order;
        }
      });

      function selectItem(item) {
        s.selected = item;
      }
    }
  }
})
();
