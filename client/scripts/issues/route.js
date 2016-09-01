(function () {
  'use strict';

  angular
    .module('app.issues')
    .config(configureState);

  configureState.$inject = ['$stateProvider'];

  function configureState($stateProvider) {
    $stateProvider
      .state('project.issues', {
        url: '/issues',
        views: {
          "content@root": {
            templateUrl: 'scripts/issues/templates/issues.html'
          }
        }
      })
      .state('project.issues.add', {
        url: '/add',
        views: {
          "content@root": {
            templateUrl: 'scripts/issues/templates/add.html'
          }
        }
      });
  }
})();
