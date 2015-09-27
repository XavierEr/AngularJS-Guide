(function (angular) {
    'use strict';

    MainRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular
        .module('angularJSGuideApp')
        .config(MainRoutes);

    function MainRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'Templates/Home/Index.html'
            });
    }
})(angular);