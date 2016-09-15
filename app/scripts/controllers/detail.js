'use strict';

/**
 * @ngdoc function
 * @name labsDesignYeoman.controller:DetailCtrl
 * @description
 * # DetailctrlCtrl
 * Controller of the labsDesignYeoman
 */
angular.module('labsDesignYeoman')
  .controller('DetailCtrl', function ($scope, $stateParams, ProductService) {
    $scope.product = ProductService.getProductById($stateParams.id);
    $scope.releases = [
      '1.6.9',
      '1.6.8',
      '1.6.7',
      '1.6.6',
      '1.6.5',
      '1.6.4',
      '1.6.3',
      '1.6.2',
      '1.6.10',
      '1.6.1',
      '1.6.0',
      '1.5.9',
      '1.5.8',
      '1.5.7',
      '1.5.6',
      '1.5.5',
      '1.5.4',
      '1.5.3',
      '1.5.2',
      '1.5.1.0',
      '1.5.10',
      '1.5.0.0'
    ];
    $scope.selectedRelease = $scope.releases[0];

    $scope.selectRelease = function(rel) {
      $scope.selectedRelease = rel;
    }

  });
