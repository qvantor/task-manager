(function () {
    'use strict';

    angular
        .module('app.auth')
        .config(configureState);

    configureState.$inject = ['$stateProvider'];

    function configureState($stateProvider) {
        $stateProvider
            .state('authLayout', {
                abstract: true,
                views: {
                    "@": {
                        templateUrl: 'scripts/auth/templates/layout.html'
                    }
                }
            })
            .state('login', {
                parent: 'authLayout',
                url: "/login",
                views: {
                    "content@authLayout": {
                        templateUrl: 'scripts/auth/templates/login.html',
                        controller:'loginCtrl',
                        controllerAs:'vm'
                    }
                }
            })
            .state('signup', {
                parent: 'authLayout',
                url: "/signup",
                views: {
                    "content@authLayout": {
                        templateUrl: 'scripts/auth/templates/signup.html',
                        controller:'signupCtrl',
                        controllerAs:'vm'
                    }
                }
            });
    }
})();
