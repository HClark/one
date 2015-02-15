
var app = angular.module('starter', ['ionic','starter.controllers','starter.services','ngResource'])

.run(function($ionicPlatform, $rootScope,   $state,   $stateParams) {
  $ionicPlatform.ready(function() {

  if(window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if(window.StatusBar) {
    StatusBar.styleDefault();
  }

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;    
  });
})

.config( ['$stateProvider', '$urlRouterProvider',
  function ($stateProvider,   $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider  
      .state("home", {
          // Use a url of "/" to set a state as the "home".
          url: "/",
      
          templateUrl : 'views/home.html',
          controller: "HomeController"
        })    

}]
)

.value ("KINVEY", {
        "auth": "Basic a2lkX1d5WFNUWEdlbzozM2YyNWE4OTE3M2I0NTBiOGMxMzFkMjNhMWVjZTFiMA==",
      "appUrl": "https://baas.kinvey.com/appdata/kid_WyXSTXGeo/cations",
      "baseUrl": "https://baas.kinvey.com/appdata/kid_WyXSTXGeo/cations"
});

  
