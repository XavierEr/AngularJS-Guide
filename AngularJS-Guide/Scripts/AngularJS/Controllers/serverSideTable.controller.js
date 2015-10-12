(function (angular) {
    ServerSideTableController.$inject = ['$scope', '$http'];

    angular
        .module('angularJSGuideApp')
        .controller('ServerSideTableController', ServerSideTableController);

    function ServerSideTableController($scope, $http) {
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
            { Name: "Xavier10", Age: 30, Country: "Singapore" },
            { Name: "Xavier11", Age: 30, Country: "Singapore" },
            { Name: "Xavier12", Age: 30, Country: "Singapore" },
            { Name: "Xavier13", Age: 30, Country: "Singapore" },
            { Name: "Xavier14", Age: 30, Country: "Singapore" },
            { Name: "Xavier15", Age: 30, Country: "Singapore" },
            { Name: "Xavier16", Age: 30, Country: "Singapore" },
            { Name: "Xavier17", Age: 30, Country: "Singapore" },
            { Name: "Xavier18", Age: 30, Country: "Singapore" },
            { Name: "Xavier19", Age: 30, Country: "Singapore" },
            { Name: "Xavier20", Age: 30, Country: "Singapore" },
            { Name: "Xavier21", Age: 30, Country: "Singapore" },
            { Name: "Xavier22", Age: 30, Country: "Singapore" },
            { Name: "Xavier23", Age: 30, Country: "Singapore" },
            { Name: "Xavier24", Age: 30, Country: "Singapore" },
            { Name: "Xavier25", Age: 30, Country: "Singapore" },
            { Name: "Xavier26", Age: 30, Country: "Singapore" },
            { Name: "Xavier27", Age: 30, Country: "Singapore" },
            { Name: "Xavier28", Age: 30, Country: "Singapore" },
            { Name: "Xavier29", Age: 30, Country: "Singapore" },
            { Name: "Xavier30", Age: 30, Country: "Singapore" },
            { Name: "Xavier31", Age: 30, Country: "Singapore" },
            { Name: "Xavier32", Age: 30, Country: "Singapore" },
            { Name: "Xavier33", Age: 30, Country: "Singapore" },
            { Name: "Xavier34", Age: 30, Country: "Singapore" },
            { Name: "Xavier35", Age: 30, Country: "Singapore" },
            { Name: "Xavier36", Age: 30, Country: "Singapore" },
            { Name: "Xavier37", Age: 30, Country: "Singapore" },
            { Name: "Xavier38", Age: 30, Country: "Singapore" },
            { Name: "Xavier39", Age: 30, Country: "Singapore" },
            { Name: "Xavier40", Age: 30, Country: "Singapore" },
            { Name: "Xavier41", Age: 30, Country: "Singapore" },
            { Name: "Xavier42", Age: 30, Country: "Singapore" },
            { Name: "Xavier43", Age: 30, Country: "Singapore" },
            { Name: "Xavier44", Age: 30, Country: "Singapore" },
            { Name: "Xavier45", Age: 30, Country: "Singapore" },
            { Name: "Xavier46", Age: 30, Country: "Singapore" },
            { Name: "Xavier47", Age: 30, Country: "Singapore" },
            { Name: "Xavier48", Age: 30, Country: "Singapore" },
            { Name: "Xavier49", Age: 30, Country: "Singapore" },
            { Name: "Xavier50", Age: 30, Country: "Singapore" }
        ];
        $scope.customerInfos = mockTableData;
    }
})(angular);