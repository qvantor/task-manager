(function () {
  'use strict';

  angular
    .module('app.layout')
    .directive('pickIcon', pickIcon);

  pickIcon.$inject = [];

  function pickIcon() {
    var directive = {
      restrict: 'EA',
      scope: {
        icon: '=pickIcon',
        editable: '='
      },
      templateUrl: 'scripts/layout/templates/pickIcon.html',
      link: link
    };
    return directive;

    function link(scope, element) {
      scope.setIcon = setIcon;

      function setIcon(icon) {
        scope.icon = icon;
      }

      scope.icons = [
        'glyphicon glyphicon-asterisk',
        'glyphicon glyphicon-envelope',
        'glyphicon glyphicon-heart',
        'glyphicon glyphicon-signal',
        'glyphicon glyphicon-cog',
        'glyphicon glyphicon-trash',
        'glyphicon glyphicon-file',
        'glyphicon glyphicon-inbox',
        'glyphicon glyphicon-download',
        'glyphicon glyphicon-upload',
        'glyphicon glyphicon-play-circle',
        'glyphicon glyphicon-tag',
        'glyphicon glyphicon-tags',
        'glyphicon glyphicon-font',
        'glyphicon glyphicon-book',
        'glyphicon glyphicon-flag',
        'glyphicon glyphicon-certificate',
        'glyphicon glyphicon-bell',
        'glyphicon glyphicon-thumbs-up',
        'glyphicon glyphicon-thumbs-down',
        'glyphicon glyphicon-pushpin',
        'glyphicon glyphicon-link',
        'glyphicon glyphicon-paperclip',
        'glyphicon glyphicon-flash'
      ]
    }
  }
})
();
