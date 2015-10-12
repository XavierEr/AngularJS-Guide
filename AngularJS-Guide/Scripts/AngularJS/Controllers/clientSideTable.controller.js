(function (angular) {
    ClientSideTableController.$inject = ['$scope', '$http'];

    angular
        .module('angularJSGuideApp')
        .controller('ClientSideTableController', ClientSideTableController);

    function ClientSideTableController($scope, $http) {
        $scope.customerInfos = [];

        $scope.updateCustomerInfos = function () {
            $http.get('api/ClientSideTable/GetCustomerInfos').success(function (data) {
                angular.forEach(data, function (value, key) {
                    $scope.customerInfos.push(value);
                });
            });
        };
    }
})(angular);