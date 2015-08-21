// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('TitikTanya', ['ionic', 'TitikTanya.controllers', 'TitikTanya.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.constant('ApiUrl', 'http://localhost:8100/api/v1')

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider){
    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    // enable cache
    $httpProvider.defaults.cache = true;

    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);

    $stateProvider
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/side-menu.html',
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            },
            'fabContent': ''
        }
    })

    .state('app.places', {
        url: '/places',
        views: {
            'menuContent': {
                templateUrl: 'templates/places/all.html',
                controller: 'PlacesCtrl'
            }
        }
    })

    .state('app.tabs', {
        url: '/tabs',
        abstract: true,
        views: {
            'menuContent': {
                templateUrl: 'templates/places/tabs.html',
                controller: 'TabsCtrl'
            }
        }
    })
    .state('app.tabs.tab-img', {
        url: '/',
        abstract: true,
        views: {
            'tab-img': {
                templateUrl: 'templates/places/tab-img.html',
                controller: 'TabsCtrl'
            }
        }
    })



    .state('app.tabs.place-info', {
        url: '/place/:id/info',
        views: {
            'tab-info': {
                templateUrl: 'templates/places/info.html',
                controller: 'PlaceDetailCtrl'
            }
        }
    })
    .state('app.tabs.place-desc', {
        url: '/place/:id/desc',
        views: {
            'tab-desc': {
                templateUrl: 'templates/places/desc.html',
                controller: 'PlaceDetailCtrl'
            }
        }
    })
    .state('app.tabs.place-promo', {
        url: '/place/:id/promo',
        views: {
            'tab-promo': {
                templateUrl: 'templates/places/promo.html',
                controller: 'PlaceDetailCtrl'
            }
        }
    })
    .state('app.tabs.place-news', {
        url: '/place/:id/news',
        views: {
            'tab-news': {
                templateUrl: 'templates/places/news.html',
                controller: 'PlaceDetailCtrl'
            }
        }
    })
    .state('app.tabs.place-reviews', {
        url: '/place/:id/reviews',
        views: {
            'tab-reviews': {
                templateUrl: 'templates/places/reviews.html',
                controller: 'PlaceDetailCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise('/app/home');
})
