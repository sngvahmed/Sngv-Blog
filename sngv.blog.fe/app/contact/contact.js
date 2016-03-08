'use strict';

/**
 * @ngdoc function
 * @name SngvBlog.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SngvBlog
 */
sngvBlog.controller('contactCtrl', function ($scope, $rootScope, $location) {
    var urlState = $location.url();
    $rootScope.urlState = urlState.slice(1, urlState.length);

});
