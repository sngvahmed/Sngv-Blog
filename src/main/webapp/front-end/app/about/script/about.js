'use strict';

var app = angular.module('SngvBlog');

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
