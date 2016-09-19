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
        field: '=',
        onChange: '='
      },
      templateUrl: function (p, a) {
        return a.template || 'scripts/layout/templates/fieldDropdown.html';
      },
      link: link
    };
    return directive;

    function link(s, e) {

      var min = 10;
      s.selectItem = selectItem;
      init();

      function init() {
        s.data.items.forEach(function (item, i) {
          if (s.field) {
            if (item.id === s.field.fieldItemsId)
              s.selected = item;
          } else if (item.order < min) {
            selectItem(item);
            min = item.order;
          }
        });

        if (s.onChange)
          s.$watch('field', function (n, o) {
            if (n === o) return;
            s.onChange(s.field);
          }, true);
      }

      function selectItem(item) {
        if (s.field) {
          s.field.fieldItemsId = item.id;
        } else {
          s.field = {fieldId: s.data.id, fieldItemsId: item.id};
        }
        s.selected = item;
      }
    }
  }
})
();
