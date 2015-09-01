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
        },

        getPromo: function(id) {
            return $http.get(ApiUrl + '/promo/' + id + '/?format=json');
        },

        getNews: function(id) {
            return $http.get(ApiUrl + '/news/' + id + '/?format=json');
        },

        getReview: function(id) {
            return $http.get(ApiUrl + '/review/' + id + '/?format=json');
        },

        getReview: function(id) {
            return $http.get(ApiUrl + '/review/' + id + '/?format=json');
        }
    };
}])

.factory('BlogFactory', ['$http', 'ApiUrl', function($http, ApiUrl){
    return {
        all: function(){
            return $http.get(ApiUrl + '/blog/?format=json&limit=10');
        },

        get: function(id) {
            return $http.get(ApiUrl + '/blog/' + id + '/?format=json');
        }
    };
}])
