'use strict';

/**
 * @ngdoc directive
 * @name labsDesignYeoman.directive:hero
 * @description
 * # hero
 */
angular.module('labsDesignYeoman')
  .directive('hero', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the hero directive');
      }
    };
  });
