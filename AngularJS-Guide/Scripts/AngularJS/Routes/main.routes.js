(function (angular) {
    'use strict';

    MainRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular
        .module('angularJSGuideApp')
        .config(MainRoutes);

    function MainRoutes($stateProvider, $urlRouterProvider) {

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
            });
    }
})(angular);