'use strict';

/**
 * @ngdoc directive
 * @name labsDesignYeoman.directive:escapeClose
 * @description
 * # escapeClose
 */
angular.module('labsDesignYeoman')
  .directive('escapeClose', function() {
    return {
      restrict: 'EAC',
      link: function(scope, element, attrs) {

        var body = document.querySelectorAll('body')[0];
        body.classList.toggle('has-modal-open');

        function escapeToClose(event) {
          if (event.keyCode == 27) {
            scope.$apply(function() {
              scope.$parent.fullScreenSearchShowing = false;
            })
          }
        }

        var backdrop = document.querySelectorAll('.full-screen-search-overlay')[0];
        backdrop.addEventListener('click', function() {
          scope.$apply(function() {
            scope.$parent.fullScreenSearchShowing = false;
          })
        })

        document.addEventListener('keydown', escapeToClose);
        scope.$on('$destroy', function() {
          body.classList.toggle('has-modal-open');
          document.removeEventListener('keydown', escapeToClose)
        })
      }
    }
  });
