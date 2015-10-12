(function (angular) {
    'use strict';

    MainRoutes.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    angular
        .module('angularJSGuideApp')
        .config(MainRoutes);

    function MainRoutes($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('clientsidetable', {
                url: '/clientsidetable',
                templateUrl: '/Templates/Table/ClientSideTable.html',
                controller: 'ClientSideTableController'
            })
            .state('serversidetable', {
                url: '/serversidetable',
                templateUrl: '/Templates/Table/ServerSideTable.html',
                controller: 'ServerSideTableController'
            });
    }
})(angular);