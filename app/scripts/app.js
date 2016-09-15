'use strict';

/**
 * @ngdoc overview
 * @name nlpPuiApp
 * @description
 * # nlpPuiApp
 *
 * Main module of the application.
 */
 String.prototype.capitalizeFirstLetter = function() {
   return this.charAt(0).toUpperCase() + this.slice(1);
 };

angular
  .module('labsDesignYeoman', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'smoothScroll',
    'sticky',
    'duScroll',
    'focus-if',
    'ui.bootstrap',
    'angucomplete-alt'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/products');
    //
    // Now set up the states
    $stateProvider
      .state('index', {
        url: '/products',
        views: {
          'main': {
            templateUrl: 'views/product-index.html',
            controller: 'IndexCtrl'
          }
        }
      })

      .state('detail', {
        url: '/products/:id',
        views: {
          'main': {
            templateUrl: 'views/product-detail.html',
            controller: 'DetailCtrl'
          }
        }
      });
  });
