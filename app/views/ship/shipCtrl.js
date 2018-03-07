angular.module('starships').controller('shipCtrl', function($scope, $stateParams, shipSrvc) {
    
    
    $scope.id = $stateParams.id;

    shipSrvc.getShip($stateParams.id).then(ship => $scope.ship = ship)
})