'use strict';

var app = angular.module('SngvBlog');

app.directive('navigation' , function(){
    return {
        restrict:'E',
        templateUrl:'views/index/navigation.html',
        controller:function(){

        },
        controllerAs:'navCtrl'
    };
});