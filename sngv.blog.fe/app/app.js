'use strict';

var sngvBlog = angular.module('SngvBlog', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource',
    'ngRoute', 'ngSanitize', 'ngTouch']);

sngvBlog.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
    }).when('/about', {
        templateUrl: 'app/about/about.html',
        controllerAs: 'AboutCtrl'
    }).when('/login', {
        templateUrl: 'app/login/login.html',
        controllerAs: 'LoginCtrl'
    }).when('/admin', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
    }).when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'contactCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
