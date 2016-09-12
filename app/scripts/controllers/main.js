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
    $scope.productSearch = '';
    $scope.userIsSearching = false;
    $scope.resultsLoading = false;

    $scope.$watch('productSearch', function(newValue, oldValue) {
      if ( newValue.length > 0 ) {
        $scope.resultsLoading = true;

        $timeout(function() {
          $scope.userIsSearching = true;
          $scope.resultsLoading = false;
        }, 1000);

      } else {
        $scope.userIsSearching = false;
        $scope.resultsLoading = false;
      }

      // if ( newValue.length > 0 ) {
      //   $scope.notCurrentlyLoading = false;
      //   $timeout(function() {
      //     $scope.notCurrentlyLoading = true;
      //     $scope.notCurrentlySearching = false;
      //   }, 1200)
      // } else {
      //   // $scope.notCurrentlyLoading = false;
      //   $scope.notCurrentlySearching = true;
      //   $scope.notCurrentlyLoading = true;
      // }
    })

    $scope.subnavLinks = {
      pcf: [
        { id: 'pcfproducts', name: 'PCF Products'},
        { id: 'pcfservices', name: 'PCF Services'},
        { id: 'pcfpartnerservices', name: 'PCF Partner Services' }
      ]
    };

    $scope.products = {
      core: [
        { name: 'Buildpacks for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_buildpacks@2x.png'},
        { name: 'PCF Dev', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
        // { name: 'PCF Elastic Runtime', author: 'Pivotal' , icon: ''},
        { name: 'PCF JMX Bridge (Ops Metrics)', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_opsmetrics_cf@2x.png'},
        { name: 'PCF Log Search', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pcfLogSearch@2x.png'},
        // { name: 'PCF Metrics', author: 'Pivotal' , icon: ''},
        // { name: 'PCF Operations Manager', author: 'Pivotal' , icon: ''},
        { name: 'Stemcells for PCF', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png' }
      ],
      services: [
        { name: 'API Gateway for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_apigateway_cf@2x.png'},
        { name: 'App Distribution for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_appdistribution_cf_a@2x.png'},
        { name: 'Data Sync for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_datasync_cf@2x.png'},
        { name: 'GemFire for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_gemfire_cf@2x.png'},
        { name: 'IPSec Add-on for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
        { name: 'MySQL for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_mysql_cf@2x.png'},
        { name: 'Pivotal Cloud Foundry Service Broker for AWS', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_awsbroker@2x.png'},
        { name: 'Pivotal Tracker for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotaltracker_cf@2x.png'},
        { name: 'Push Notification for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pushnotification_cf@2x.png'},
        { name: 'RabbitMQ for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_rabbitmq_cf@2x.png'},
        { name: 'Redis for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_redis_cf@2x.png'},
        { name: 'Riak CS for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_riakcsdev_cf@2x.png'},
        { name: 'Session State Caching Powered by GemFire for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_ssc_gemfire_cf@2x.png'},
        { name: 'Single Sign-On for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_single_signon_cf@2x.png'},
        { name: 'Spring Cloud Services for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_spring_cloud_services_cf@2x.png'},
        { name: 'Spring Insight for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_insight_cf@2x.png'},
        { name: 'Spring XD for PCF', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_springxd_cf@2x.png' }
      ],
      partner: [
        { name: 'Aerospike Service Broker for PCF (BETA)', author: 'Aerospike' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_aerospike@2x.png'},
        { name: 'Apigee Edge Service Broker for PCF', author: 'Apigee' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_apigee@2x.png'},
        { name: 'AppDynamics Service Broker for PCF', author: 'AppDynamics' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/Icon_appdynamics_cf.png'},
        { name: 'Cloudbees Jenkins Operations Center for PCF', author: 'CloudBees' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_jenkins_enterprise.png'},
        { name: 'CloudBees Jenkins Platform for PCF', author: 'CloudBees' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_jenkins_enterprise.png'},
        { name: 'Cloudsoft Service Broker for PCF (BETA)', author: 'Cloudsoft' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_cloudsoft@2x.png'},
        { name: 'DataStax Enterprise for PCF', author: 'DataStax' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_datastaxenterprise_cf@2x.png'},
        { name: 'Dingo PostgreSQL for PCF (BETA)', author: 'Dingo' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_dingopostgresql@2x.png'},
        { name: 'Dynatrace AppMon Service Broker for PCF', author: 'Dynatrace' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon-dynatrace.png'},
        { name: 'Dynatrace Ruxit Service Broker for PCF', author: 'Dynatrace' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon-dynatrace.png'},
        { name: 'EDB Postgres Service Broker for PCF', author: 'EDB' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_edbpostgres@2x.png'},
        { name: 'GitLab Enterprise Plus for PCF', author: 'GitLab' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_gitlab_cf@2x.png'},
        { name: 'ISS Knowtify Search Analytics for PCF', author: 'ISS' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_knowtify_cf@2x.png'},
        { name: 'JFrog Artifactory for PCF', author: 'JFrog' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_jfrog_cf@2x.png'},
        { name: 'New Relic Service Broker for PCF', author: 'New Relic' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_newrelic_cf@2x.png'},
        { name: 'Redis Labs Enterprise Cluster Service Broker for PCF', author: 'Redis Labs', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_rlec@2x.png' }
      ],
      data: [
        {name: 'Alpine Chorus for Pivotal Big Data Suite', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_alpine@2x.png'},
        {name: 'Pivotal GemFire', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_gemfire@2x.png'},
        {name: 'Pivotal GemFire XD', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_sqlfire@2x.png'},
        {name: 'Pivotal Greenplum', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_gpdb@2x.png'},
        {name: 'Pivotal HD', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_hd@2x.png'},
        {name: 'Pivotal HDB', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotalHDB@2x.png'},
        {name: 'Pivotal HDP', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotalhdp@2x.png'},
        {name: 'Pivotal SQLFire', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_sqlfire@2x.png' }
      ],
      standalone: [
        {name: 'Flo for Spring XD', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_spring_flo_beta_cf@2x.png'},
        {name: 'Pivotal RabbitMQ', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_rabbitmq@2x.png'},
        {name: 'Pivotal tc Server', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_tcserver@2x.png'},
        {name: 'Pivotal Web Server', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_webserver@2x.png'}
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
