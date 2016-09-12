'use strict';

/**
 * @ngdoc directive
 * @name labsDesignYeoman.directive:ProductCard
 * @description
 * # ProductCard
 */
angular.module('labsDesignYeoman')
  .directive('productCard', function () {
    return {
      templateUrl: 'views/product-card.html',
      restrict: 'E',
      scope: {
        name: '@name',
        icon: '@icon',
        description: '@description',
        provider: '@provider'
      },
      link: function postLink($scope, element, attrs) {
      }
    };
  });
