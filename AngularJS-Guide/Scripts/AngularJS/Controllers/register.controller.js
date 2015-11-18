(function (angular) {
    RegisterController.$inject = ['$scope', '$http'];

    angular
        .module('angularJSGuideApp')
        .controller('RegisterController', RegisterController);

    function RegisterController($scope, $http) {
        $scope.email;
        $scope.password;
        $scope.confirmPassword;

        $scope.register = function () {
            $http.post('api/Account/Register', { email: $scope.email, password: $scope.password, confirmPassword: $scope.confirmPassword })
            .then(function successCallback(response) {
            }, function errorCallback(response) {
            });
        };
    }
})(angular);