/**
* TitikTanya.services Module
*
* Description
*/
angular.module('TitikTanya.services', [])

.factory('PlaceFactory', ['$http', 'ApiUrl', function($http, ApiUrl){
    return {
        all: function() {
            return $http.get(ApiUrl + '/myplace/?format=json&limit=10');
        },

        get: function(id) {
            return $http.get(ApiUrl + '/myplace/' + id + '/?format=json');
        }
    };
}])
