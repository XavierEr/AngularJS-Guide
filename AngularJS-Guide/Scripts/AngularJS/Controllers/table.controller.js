(function (angular) {
    TableController.$inject = ['$scope', '$http'];

    angular
        .module('angularJSGuideApp')
        .controller('TableController', TableController);

    function TableController($scope, $http) {
        $scope.customerInfos = [];

        var mockTableData = [
            { Name: "Xavier1", Age: 30, Country: "Singapore" },
            { Name: "Xavier2", Age: 30, Country: "Singapore" },
            { Name: "Xavier3", Age: 30, Country: "Singapore" },
            { Name: "Xavier4", Age: 30, Country: "Singapore" },
            { Name: "Xavier5", Age: 30, Country: "Singapore" },
            { Name: "Xavier6", Age: 30, Country: "Singapore" },
            { Name: "Xavier7", Age: 30, Country: "Singapore" },
            { Name: "Xavier8", Age: 30, Country: "Singapore" },
            { Name: "Xavier9", Age: 30, Country: "Singapore" },
            { Name: "Xavier10", Age: 30, Country: "Singapore" }
        ];
        $scope.customerInfos = mockTableData;
    }
})(angular);