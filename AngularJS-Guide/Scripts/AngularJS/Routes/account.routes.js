(function (angular) {
    'use strict';

    AccountRoutes.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    angular
        .module('angularJSGuideApp')
        .config(AccountRoutes);

    function AccountRoutes($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: '/Templates/Account/Register.html',
                controller: 'RegisterController'
            });
    }
})(angular);