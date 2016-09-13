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
        class: '@class',
        name: '@name',
        icon: '@icon',
        description: '@description',
        provider: '@provider',
        badge: '@badge',
      },
      link: function postLink($scope, element, attrs) {
      }
    };
  });
