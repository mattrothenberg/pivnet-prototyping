'use strict';

/**
 * @ngdoc overview
 * @name nlpPuiApp
 * @description
 * # nlpPuiApp
 *
 * Main module of the application.
 */
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
    'focus-if'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
      })

      .state('examples', {
        url: '/examples',
        templateUrl: 'views/examples.html'
      });
  });
