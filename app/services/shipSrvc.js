//services get created as constructor functions. We cannot use arrow functions here

//Anytime you create a new service, 
        //inject it into the controllers that need it
        //make a script tag for it at index.html

angular.module('starships').service('shipSrvc', function($http) {
    this.getShips = function() {
        return $http.get('https://swapi.co/api/starships/').then(resp=>{
            return resp.data.results.map(ship=> {

                //url
                //https://swapi.co/api/starships/15/
                //get id
                //15
                //

                let ary = ship.url.split('/')
                let id = ary[ary.length - 2] * 1;
                ship.id = id;

                return ship;

                //if the id was given, we wouldn't have to do all the above. we would only do return resp.data.results

            });
        })
    }

    this.getShip = function(id) {
        return $http.get('https://swapi.co/api/starships/' +id).then(resp=>{
            return resp.data;
        })
    }
})