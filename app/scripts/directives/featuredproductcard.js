'use strict';

/**
 * @ngdoc directive
 * @name labsDesignYeoman.directive:featuredProductCard
 * @description
 * # featuredProductCard
 */
angular.module('labsDesignYeoman')
  .directive('featuredProductCard', function () {
    return {
      templateUrl: 'views/featured-product-card.html',
      restrict: 'E',
      scope: {
        class: '@class',
        name: '@name',
        icon: '@icon',
        description: '@description',
        provider: '@provider',
        badge: '@badge',
      }
    };
  });
