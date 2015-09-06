'use strict';

angular.module('webappApp', [
    'ngAnimate',  'ngAria', 'ngCookies', 'ngMessages', 'ngResource',
    'ngRoute', 'ngSanitize',
    'ngTouch'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
