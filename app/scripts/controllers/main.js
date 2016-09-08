'use strict';

/**
 * @ngdoc function
 * @name nlpPuiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nlpPuiApp
 */
angular.module('labsDesignYeoman')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.activeTypeFilter = 'pcf';
    $scope.notCurrentlyLoading = true;
    $scope.notCurrentlySearching = true;
    $scope.productSearch = '';

    $scope.$watch('productSearch', function(newValue, oldValue) {
      if ( newValue.length > 0 ) {
        $scope.notCurrentlyLoading = false;
        $timeout(function() {
          $scope.notCurrentlyLoading = true;
          $scope.notCurrentlySearching = false;
        }, 1200)
      } else {
        // $scope.notCurrentlyLoading = false;
        $scope.notCurrentlySearching = true;
        $scope.notCurrentlyLoading = true;
      }
    })

    $scope.subnavLinks = {
      pcf: [
        { id: 'pcfproducts', name: 'PCF Products' },
        { id: 'pcfservices', name: 'PCF Services'},
        { id: 'pcfpartnerservices', name: 'PCF Partner Services' }
      ]
    };

    $scope.products = {
      core: [
        { name: 'Buildpacks for PCF', author: 'Pivotal' },
        { name: 'PCF Dev', author: 'Pivotal' },
        { name: 'PCF Elastic Runtime', author: 'Pivotal' },
        { name: 'PCF JMX Bridge (Ops Metrics)', author: 'Pivotal' },
        { name: 'PCF Log Search', author: 'Pivotal' },
        { name: 'PCF Metrics', author: 'Pivotal' },
        { name: 'PCF Operations Manager', author: 'Pivotal' },
        { name: 'Stemcells for PCF', author: 'Pivotal' }
      ],
      services: [
        { name: 'API Gateway for PCF', author: 'Pivotal' },
        { name: 'App Distribution for PCF', author: 'Pivotal' },
        { name: 'Data Sync for PCF', author: 'Pivotal' },
        { name: 'GemFire for PCF', author: 'Pivotal' },
        { name: 'IPSec Add-on for PCF', author: 'Pivotal' },
        { name: 'MySQL for PCF', author: 'Pivotal' },
        { name: 'Pivotal Cloud Foundry Service Broker for AWS', author: 'Pivotal' },
        { name: 'Pivotal Tracker for PCF', author: 'Pivotal' },
        { name: 'Push Notification for PCF', author: 'Pivotal' },
        { name: 'RabbitMQ for PCF', author: 'Pivotal' },
        { name: 'Redis for PCF', author: 'Pivotal' },
        { name: 'Riak CS for PCF', author: 'Pivotal' },
        { name: 'Session State Caching Powered by GemFire for PCF', author: 'Pivotal' },
        { name: 'Single Sign-On for PCF', author: 'Pivotal' },
        { name: 'Spring Cloud Services for PCF', author: 'Pivotal' },
        { name: 'Spring Insight for PCF', author: 'Pivotal' },
        { name: 'Spring XD for PCF', author: 'Pivotal' }
      ],
      partner: [
        { name: 'Aerospike Service Broker for PCF (BETA)', author: 'Aerospike' },
        { name: 'Apigee Edge Service Broker for PCF', author: 'Apigee' },
        { name: 'AppDynamics Service Broker for PCF', author: 'AppDynamics' },
        { name: 'Cloudbees Jenkins Operations Center for PCF', author: 'CloudBees' },
        { name: 'CloudBees Jenkins Platform for PCF', author: 'CloudBees' },
        { name: 'Cloudsoft Service Broker for PCF (BETA)', author: 'Cloudsoft' },
        { name: 'DataStax Enterprise for PCF', author: 'DataStax' },
        { name: 'Dingo PostgreSQL for PCF (BETA)', author: 'Dingo' },
        { name: 'Dynatrace AppMon Service Broker for PCF', author: 'Dynatrace' },
        { name: 'Dynatrace Ruxit Service Broker for PCF', author: 'Dynatrace' },
        { name: 'EDB Postgres Service Broker for PCF', author: 'EDB' },
        { name: 'GitLab Enterprise Plus for PCF', author: 'GitLab' },
        { name: 'ISS Knowtify Search Analytics for PCF', author: 'ISS' },
        { name: 'JFrog Artifactory for PCF', author: 'JFrog' },
        { name: 'New Relic Service Broker for PCF', author: 'New Relic' },
        { name: 'Redis Labs Enterprise Cluster Service Broker for PCF', author: 'Redis Labs' }
      ],
      data: [
        {name: 'Alpine Chorus for Pivotal Big Data Suite', author: 'Pivotal' },
        {name: 'Pivotal GemFire', author: 'Pivotal' },
        {name: 'Pivotal GemFire XD', author: 'Pivotal' },
        {name: 'Pivotal Greenplum', author: 'Pivotal' },
        {name: 'Pivotal HD', author: 'Pivotal' },
        {name: 'Pivotal HDB', author: 'Pivotal' },
        {name: 'Pivotal HDP', author: 'Pivotal' },
        {name: 'Pivotal SQLFire', author: 'Pivotal' }
      ],
      standalone: [
        {name: 'Flo for Spring XD', author: 'Pivotal'},
        {name: 'Pivotal RabbitMQ', author: 'Pivotal'},
        {name: 'Pivotal tc Server', author: 'Pivotal'},
        {name: 'Pivotal Web Server', author: 'Pivotal'}
      ]
    };

    $scope.filteredProducts = [];

    _.mapValues($scope.products, function(productGroup) {
      _.map(productGroup, function(product) {
        product.version = faker.system.semver();
        $scope.filteredProducts.push(product);
      })
    });

    $scope.showProducts = function(type) {
      $scope.activeTypeFilter = type;
    }
  });
