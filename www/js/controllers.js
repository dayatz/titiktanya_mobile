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

    $scope.cekBadgeRate = function(rate) {
        var c;
        if (rate >= 4.5) {
            c = '5';
        } else if (rate >= 3.5) {
            c = '4';
        } else if (rate >= 2.5) {
            c = '3';
        } else if (rate >= 1.5) {
            c = '2';
        } else {
            c = 1;
        }
        return 'rate-' + c;
    }
}])

.controller('PlaceDetailCtrl', ['$scope', '$stateParams', 'PlaceFactory', function($scope, $stateParams, PlaceFactory){
    var id = $stateParams.id;

    PlaceFactory.get(id)
    .success(function(data){
        $scope.place = data;
        console.log($scope.place);
    })
    .error(function(err){
        console.log(err);
    });

}])
