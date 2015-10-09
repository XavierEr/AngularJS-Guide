(function (angular) {
    'use strict';

    MainRoutes.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    angular
        .module('angularJSGuideApp')
        .config(MainRoutes);

    function MainRoutes($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/Templates/Main/Home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/Templates/Main/About.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/Templates/Main/Contact.html'
            })
            .state('table', {
                url: '/table',
                templateUrl: '/Templates/Main/Table.html',
                controller: 'TableController'
            });
    }
})(angular);