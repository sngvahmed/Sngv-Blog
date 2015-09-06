'use strict';

var app = angular.module('webappApp');

app.controller('MainController', ['$http' , function ($http) {

    this.size = 1;

    this.user = {
        name:'',
        age:0,
        email:'',
        password:'',
        repassword:''
    };

    this.onSubmit = function () {
        console.log(this.user);
    };

    this.showUser = function(){
        var httpRequest = $http.get('http://localhost:8080/Authentication/showUser');

        httpRequest.success(function(data){
            console.log(data);
        });

        httpRequest.error(function (data) {
            console.log(data);
        });
    };

    this.getUserName= function(){
        this.user.name = "ahmed";
        return this.user.name;
    };
}]);
