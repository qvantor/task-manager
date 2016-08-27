(function () {
  'use strict';

  angular
    .module('app.wizard')
    .config(configureState);

  configureState.$inject = ['$stateProvider'];

  function configureState($stateProvider) {
    $stateProvider
      .state('wizard', {
        abstract: true,
        parent: 'root',
        url: '/wizard'
      })
      .state('wizard.init', {
        url: '/init',
        views: {
          "content@root": {
            templateUrl: 'scripts/wizard/templates/init.html',
            controller: 'initCtrl',
            controllerAs: 'vm'
          }
        }
      });
  }
})();
