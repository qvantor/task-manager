(function () {
  'use strict';

  angular
    .module('app.projects')
    .config(configureState);

  configureState.$inject = ['$stateProvider'];

  function configureState($stateProvider) {
    $stateProvider
      .state('projects', {
        parent: 'root',
        url: '/projects',
        views: {
          "content@root": {
            templateUrl: 'scripts/projects/templates/projects.html'
          }
        }
      })
      .state('project', {
        parent: 'root',
        url: '/project/:id',
        views: {
          "content@root": {
            templateUrl: 'scripts/projects/templates/project.html'
          }
        }
      });
  }
})();
