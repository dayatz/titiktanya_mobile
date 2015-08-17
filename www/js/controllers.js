/**
* TitikTanya.controllers Module
*
* Description
*/
angular.module('TitikTanya.controllers', [])

.controller('AppCtrl', ['$scope', function($scope){
    $scope.isExpanded = false;
}])

.controller('TabsCtrl', ['$scope', function($scope){
    $scope.isExpanded = false;
}])

.controller('HomeCtrl', ['$scope', function($scope){
    
}])

.controller('PlacesCtrl', ['$scope', 'PlaceFactory', function($scope, PlaceFactory){
    PlaceFactory.all()
        .success(function(data){
            $scope.data = data;
        })
        .error(function(err){
            console.log(err);
        });
}])

.controller('PlaceDetailCtrl', ['$scope', function($scope){
    
}])
