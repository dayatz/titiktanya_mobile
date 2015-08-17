/**
* TitikTanya.services Module
*
* Description
*/
angular.module('TitikTanya.services', [])

<<<<<<< HEAD
.factory('PlaceFactory', ['$http', 'ApiUrl', function($http, ApiUrl){
    return {
        all: function() {
            return $http.get(ApiUrl + '/myplace/?format=json&limit=10');
=======
.factory('PlaceFactory', ['$http', function($http){
    return {
        all: function() {
            return $http.get('http://titiktanya.com/service/api/v1/myplace/?format=json&limit=10');
>>>>>>> 5c40b6f607e589e0a92531a40098243f81a20f4d
        },

        get: function() {
            return $http.get();
        }
    };
<<<<<<< HEAD
}])
=======
}])
>>>>>>> 5c40b6f607e589e0a92531a40098243f81a20f4d
