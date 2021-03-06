(function () {
  angular.module('app', [
    'ngCookies',
    'ui.router',
    'ui.bootstrap',
    'ng-sortable',
    'mp.colorPicker',

    'app.core',
    'app.layout',
    'app.auth',
    'app.projects',
    'app.issues',
    'app.wizard',
    'app.services'
  ])
    .config(configState)
    .run(run);

  configState.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
  run.$inject = ['$rootScope', '$state'];

  function configState($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');

    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          '@': {
            templateUrl: 'scripts/layout/templates/layout.html'
          }
        }
      });

    // Set default state
    $urlRouterProvider.otherwise("/login");
  }

  function run($rootScope, $state) {
    $rootScope.$state = $state;

    $rootScope.$on("$stateChangeSuccess", function () {
      window.scrollTo(0, 0);
    });
  }
})();
