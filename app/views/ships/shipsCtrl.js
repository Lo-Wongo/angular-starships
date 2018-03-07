angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc) {
    
    // $scope.ships = ["X Wing", "T Fighter", "Millenium Falcon", "Death Star"];
    
    shipSrvc.getShips().then(ships => {
        $scope.ships = ships;
    })
})