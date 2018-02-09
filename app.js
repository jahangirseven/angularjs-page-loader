 var App = angular.module('angApp',['ui.router']);

App.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('home',{
        url : '/home',
        templateUrl : 'home.html'
    }) 

    .state('about',{
        url : '/about',
        templateUrl : 'about.html'
    }) 

    .state('contact',{
        url : '/contact',
        templateUrl : 'contact.html'
    }) 

});

 App.controller('mainController',function($scope,$http){
    $scope.showSpin = true;
     $http.get("data.json").then(function(response){
         $scope.datas = response.data;
         $scope.showSpin = false;
     });

 });