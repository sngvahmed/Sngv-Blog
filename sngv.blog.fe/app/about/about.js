'use strict';

/**
 * @ngdoc function
 * @name SngvBlog.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SngvBlog
 */

sngvBlog.controller('AboutCtrl', function ($scope, $location, $rootScope) {
  var urlState = $location.url();
  $rootScope.urlState = urlState.slice(1, urlState.length);

  $http.get('/about/getCV', {responseType: 'arraybuffer'}).success(function (response) {
    var file = new Blob([(response)], {type: 'application/pdf'});
    var fileURL = URL.createObjectURL(file);
    $scope.content = $sce.trustAsResourceUrl(fileURL);
  });

});
