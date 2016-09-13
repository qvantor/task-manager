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
        data: '=fieldDropdown',
        field: '='
      },
      templateUrl: 'scripts/layout/templates/fieldDropdown.html',
      link: link
    };
    return directive;

    function link(s, e) {

      var min = 10;
      s.selectItem = selectItem;

      s.data.items.forEach(function (item, i) {
        if (item.order < min) {
          selectItem(item);
          min = item.order;
        }
      });

      function selectItem(item) {
        s.field = {fieldId: s.data.id, fieldItemsId: item.id};
        s.selected = item;
      }
    }
  }
})
();
