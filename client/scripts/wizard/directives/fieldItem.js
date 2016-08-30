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
        editable: '=',
        index: '=',
        fieldsEdit: '='
      },
      templateUrl: 'scripts/wizard/templates/fieldItem.html',
      link: link
    };
    return directive;

    function link(vm, element) {
      vm.sortable = {
        sort: true,
        delay: 0,
        disabled: !vm.editable,
        onEnd: function (evt) {
          evt.models.forEach(function (item, i) {
            item.order = i;
          });
        }
      };

      vm.addItem = addItem;
      vm.removeItem = removeItem;

      function addItem() {
        if (vm.field.itemsList.length < 10)
          vm.field.itemsList.push({
            title: 'Item' + (vm.field.itemsList.length + 1),
            color: null,
            order: vm.field.itemsList.length
          });
      }

      function removeItem(index) {
        if (vm.field.itemsList.length > 2)
          vm.field.itemsList.splice(index, 1);
      }

      vm.$watch('editable', function (n, o) {
        if (n === o) return;
        vm.sortable.disabled = !vm.editable;
      });
    }
  }
})
();
