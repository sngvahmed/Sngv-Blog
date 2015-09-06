'use strict';

angular.module('SngvBlog', [
    'ngAnimate',  'ngAria', 'ngCookies', 'ngMessages', 'ngResource',
    'ngRoute', 'ngSanitize',
    'ngTouch'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'MainController',
        controllerAs: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controllerAs: 'AboutCtrl'
      }).when('/login' , {
        templateUrl: 'app/login/login.html',
        controllerAs: 'LoginCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
