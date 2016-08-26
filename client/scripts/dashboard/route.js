(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .config(configureState);

  configureState.$inject = ['$stateProvider'];

  function configureState($stateProvider) {
    $stateProvider
      .state('dashboard', {
        abstract: true,
        parent: 'root',
        url: ''
        views: {
          "content@root": {
            templateUrl: 'scripts/auth/templates/dashboard.html'
          }
        },
      });
  }
})();
