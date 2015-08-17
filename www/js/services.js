/**
* TitikTanya.services Module
*
* Description
*/
angular.module('TitikTanya.services', [])

.factory('PlaceFactory', ['$http', function($http){
    return {
        all: function() {
            return $http.get('http://titiktanya.com/service/api/v1/myplace/?format=json&limit=10');
        },

        get: function() {
            return $http.get();
        }
    };
}])