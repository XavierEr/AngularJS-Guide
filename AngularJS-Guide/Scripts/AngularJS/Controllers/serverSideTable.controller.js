(function (angular) {
    ServerSideTableController.$inject = ['$scope', '$http'];

    angular
        .module('angularJSGuideApp')
        .controller('ServerSideTableController', ServerSideTableController);

    function ServerSideTableController($scope, $http) {
        $scope.rowPerPage = 5;
        $scope.currentPage = 1;
        $scope.totalRecords = 0;

        $scope.customerInfos = [];

        $scope.previousPage = function () {
            $scope.updateCustomerInfos();
        };

        $scope.nextPage = function () {
            $scope.updateCustomerInfos();
        };

        $scope.updateCustomerInfos = function () {
            $http.get('api/ServerSideTable/GetCustomerInfos', { params: { currentPage: $scope.currentPage, rowPerPage: $scope.rowPerPage } }).success(function (data) {
                $scope.totalRecords = data.TotalRecords;

                angular.forEach(data.CustomerInfos, function (value, key) {
                    $scope.customerInfos.push(value);
                });
            });
        };
    }
})(angular);