'use strict';

/**
 * @ngdoc function
 * @name SngvBlog.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SngvBlog
 */

sngvBlog.controller('AdminCtrl', function ($scope, $location, $rootScope) {
    var urlState = $location.url();
    $rootScope.urlState = urlState.slice(1, urlState.length);
});
