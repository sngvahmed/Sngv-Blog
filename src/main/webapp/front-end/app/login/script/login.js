'use strict';

var app = angular.module('SngvBlog');

app.controller("LoginCtrl" , function ($http) {

    this.user = {
        username : '' ,
        password : ''
    };

    this.showError = false;

    this.error = "";

    this.enableError = function(value){
        this.showError = value;
    };

    this.sendLoginRequest = function () {

        var request = $http.post(this.user , 'http://localhost:8080/Blog/login');

        request.success(function (data) {
            console.log(data);
        });
        request.error(function (data) {
            console.log(data);
        });
    };

    this.onSubmit = function(){
        this.showError = true;
        if(this.user.username === ""){
            this.error = "username is valid";
            return;
        }else if (this.user.password === ""){
            this.error = "password is valid";
            return;
        }else if(this.user.password.length < 5){
            this.error = "password should be more than 5 character";
            return;
        }
        this.sendLoginRequest();
        this.showError = false;
    };
});