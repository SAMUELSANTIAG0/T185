app.controller('ContadorController', function ($scope) {

    $scope.total = 0;

    $scope.incrementar = function () {
        $scope.total = parseInt($scope.valor1) + parseInt($scope.valor2);
    }    
});