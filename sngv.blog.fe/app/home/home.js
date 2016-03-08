'use strict';

/**
 * @ngdoc function
 * @name SngvBlog.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SngvBlog
 */

sngvBlog.controller('HomeCtrl', function ($scope, $rootScope, $location) {
  var urlState = $location.url();
  $rootScope.urlState = urlState.slice(1, urlState.length);

  $scope.sngv_info = {
    profileImg: '/vendor/images/profile.jpg',
    name: 'Ahmed Nasser Saleh',
    job: 'Software Developer At Oragne Lab Egypt'
  };

});
