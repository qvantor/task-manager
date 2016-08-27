(function () {
  'use strict';

  angular
    .module('app.core')
    .filter('trustAsHtml', trustAsHtmlFilter);

  trustAsHtmlFilter.$inject = ['$sce'];

  function trustAsHtmlFilter($sce) {
    return filter;

    function filter(text) {

      return $sce.trustAsHtml(text);
    }
  }
})();
