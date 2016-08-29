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
      vm.addItem = addItem;
      vm.removeItem = removeItem;

      function addItem() {
        if (vm.field.items.length < 10)
          vm.field.items.push({
            title: 'Item' + (vm.field.items.length + 1),
            color: null
          });
      }

      function removeItem(index) {
        if (vm.field.items.length > 2)
          vm.field.items.splice(index, 1);
      }
    }
  }
})
();
