'use strict';

var app = angular.module('webappApp');

app.controller('AboutCtrl' , function () {
  var showConsole = function () {
    console.log("ahmed");
  };

  this.users = [
    {
      name:'ahmed',
      age:12
    },{
      name:'mohamed',
      age:15
    },{
      name:'Aya',
      age:22
    }
  ];
});

app.directive('userInfo' , function () {
  return {
    restrict:'E',
    templateUrl:'views/user-info.html',
    controller: function(){
      var showConsole = function () {
        console.log("ahmed");
      };

      showConsole();

      this.users = [
        {
          name:'ahmed',
          age:12
        },{
          name:'mohamed',
          age:15
        },{
          name:'Aya',
          age:22
        }
      ];
    },
    controllerAs:'about'
  }
});
