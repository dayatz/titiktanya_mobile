/**
* TitikTanya.controllers Module
*
* Description
*/
angular.module('TitikTanya.controllers', [])

.controller('AppCtrl', ['$scope', '$state', function($scope, $state){
    $scope.isExpanded = false;

    $scope.goToPlaces = function() {
        $state.go('app.places');
    }
}])


.controller('TabsCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    $scope.isExpanded = false;
    $scope.paramId = $stateParams.id;
    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon'
    }];
}])

.controller('HomeCtrl', ['$scope', function($scope){

}])

.controller('PlacesCtrl', ['$scope', '$ionicLoading', '$state', 'PlaceFactory', function($scope, $ionicLoading, $state, PlaceFactory){
    $ionicLoading.show({
        templateUrl: 'templates/load.html'
    });

    PlaceFactory.all()
        .success(function(data){
            $scope.data = data;
            $ionicLoading.hide();
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

    $scope.goToPlaceDetail = function(id) {
        $state.go('app.tabs.place-info', {id: id});
    }
}])

// Place detail controller start here
.controller('PlaceDetailCtrl', ['$scope', '$stateParams', 'PlaceFactory', function($scope, $stateParams, PlaceFactory){
    var id = $stateParams.id;

    PlaceFactory.get(id)
    .success(function(data){
        $scope.place = data.objects[0];
    })
    .error(function(err){
        console.log(err);
    });

    PlaceFactory.getPromo(id)
    .success(function(data){
        $scope.promos = data;
    })
    .error(function(err){
        console.log(err);
    });

    PlaceFactory.getNews(id)
    .success(function(data){
        $scope.newses = data;
    })

    PlaceFactory.getReview(id)
    .success(function(data){
        $scope.reviews = data;
    })
    .error(function(err){
        console.log(err);
    });
}])

.controller('BlogCtrl', ['$scope', '$stateParams', 'BlogFactory', function($scope, $stateParams, BlogFactory){
    var id = $stateParams.id;

    BlogFactory.all()
    .success(function(data){
        $scope.blogs = data;
    })
    .error(function(err){
        console.log(err);
    })
}])