angular.module('starships', ['ui.router'])

angular.module('starships').config(function($urlRouterProvider, $stateProvider) {
    
    $urlRouterProvider.otherwise('/')




    $stateProvider.state('home', {
        url: '/',
        template: '<div>Home State</div>'
    }).state('ships', {
        url: '/ships',
        templateUrl: 'app/views/ships/ships.html',//path to specific html view that clicking on the templateUrl takes you to
        controller: 'shipsCtrl'
    }).state('ship', {
        url: '/ships/:id',
        templateUrl: 'app/views/ship/ship.html', //path to specific html view that clicking on the templateUrl takes you to
        controller: 'shipCtrl'
    })
})