(function (angular) {
    'use strict';

    MainRoutes.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    angular
        .module('angularJSGuideApp')
        .config(MainRoutes);

    function MainRoutes($locationProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('fileupload', {
                url: '/fileupload',
                templateUrl: '/Templates/FileUpload/FileUpload.html',
                controller: 'FileUploadController'
            });;
    }
})(angular);