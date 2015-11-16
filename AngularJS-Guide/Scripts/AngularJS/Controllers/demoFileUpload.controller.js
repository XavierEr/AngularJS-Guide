(function (angular) {
    DemoFileUploadController.$inject = ['$scope', '$http'];

    angular
        .module('angularJSGuideApp')
        .controller('DemoFileUploadController', DemoFileUploadController);

    function DemoFileUploadController($scope, $http) {
        $scope.uploadPostActionUrl = 'api/FileUpload/Upload';
        $scope.options = {
            url: $scope.uploadPostActionUrl,
            maxFileSize: 10000000,
            acceptFileTypes: /(\.|\/)(csv|xls?[sx])$/i
        };
    }
})(angular);