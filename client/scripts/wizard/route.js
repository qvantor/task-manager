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
      .state('wizard.team', {
        url: '/team',
        views: {
          "content@root": {
            templateUrl: 'scripts/wizard/templates/team.html',
            controller: 'teamCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('wizard.workflow', {
        url: '/workflow',
        views: {
          "content@root": {
            template: ' <div workflow-editor></div>'
          }
        }
      })
      .state('wizard.project', {
        url: '/project',
        views: {
          "content@root": {
            templateUrl: 'scripts/wizard/templates/project.html',
            controller: 'projectCtrl',
            controllerAs: 'vm'
          }
        }
      });
  }
})();
