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
    $scope.searchIsFocused = false;

    $scope.scrollToSearch = function() {
      $scope.searchIsFocused = true;
    }

    $scope.$watch('productSearch', function(newValue, oldValue) {
      if ( newValue.length > 0 ) {
        $scope.userIsSearching = true;
        $scope.resultsLoading = false;
      } else {
        $scope.userIsSearching = false;
        $scope.resultsLoading = false;
      }
    }, 1500)

    $scope.subnavLinks = {
      pcf: [
        { id: 'datastores', tags: ['data', 'datastores', 'database'], name: 'Datastores', icon: 'fa-database mrs'},
        { id: 'monitoring', tags: ['log', 'logs', 'monitoring'], name: 'Logs & Monitoring', icon: 'fa-file-text'},
        { id: 'mobile', tags: ['mobile', 'phone', 'dev', 'tools', 'development'], name: 'Mobile Dev Tools', icon: 'fa-mobile' },
        { id: 'messaging', tags: ['messaging', 'cache', 'caching', 'cacheing', 'queue'], name: 'Caching & Messaging Queues', icon: 'fa-comment' },
        { id: 'developer', tags: ['mobile', 'phone', 'dev', 'tools', 'development'], name: 'Dev Tools', icon: 'fa-code'}
      ]
    };

    $scope.products = {
      datastores: [
        { name: 'MySQL for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_mysql_cf@2x.png'},
        { name: 'DataStax Enterprise for PCF', author: 'DataStax' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_datastaxenterprise_cf@2x.png'},
        { name: 'Riak CS for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_riakcsdev_cf@2x.png'},
        { name: 'Dingo PostgreSQL for PCF', author: 'Dingo', badge: 'BETA', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_dingopostgresql@2x.png'}
      ],
      monitoring: [
        { name: 'Spring Insight for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_insight_cf@2x.png'},
        { name: 'PCF Log Search', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pcfLogSearch@2x.png'},
        { name: 'ISS Knowtify Search Analytics for PCF', author: 'ISS' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_knowtify_cf@2x.png'}
      ],
      mobile: [
        { name: 'Push Notification for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pushnotification_cf@2x.png'},
        { name: 'API Gateway for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_apigateway_cf@2x.png'},
        { name: 'App Distribution for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_appdistribution_cf_a@2x.png'},
        { name: 'App Analytics', author: 'Pivotal', badge: 'Beta', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
      ],
      messaging: [
        { name: 'RabbitMQ for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_rabbitmq_cf@2x.png'},
        { name: 'GemFire for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_gemfire_cf@2x.png'},
        { name: 'Session State Caching Powered by GemFire for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_ssc_gemfire_cf@2x.png'},
        { name: 'Redis for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_redis_cf@2x.png'},
        { name: 'Kafka for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'}
      ],
      developer: [
        { name: 'PCF Dev', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
        { name: 'IPSec Add-on for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
        { name: 'Pivotal Tracker for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotaltracker_cf@2x.png'},
        { name: 'Cloudbees Jenkins Operations Center for PCF', author: 'CloudBees' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_jenkins_enterprise.png'},
        { name: 'CloudBees Jenkins Platform for PCF', author: 'CloudBees' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_jenkins_enterprise.png'},
        { name: 'Concourse', author: 'Concourse', badge: 'Alpha', icon: 'https://pbs.twimg.com/profile_images/714899641628753920/3C8UrVPf.jpg'},
        { name: 'GitLab Enterprise Plus for PCF', author: 'GitLab' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_gitlab_cf@2x.png'},
        { name: 'JFrog Artifactory for PCF', author: 'JFrog' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_jfrog_cf@2x.png'},
        { name: 'Single Sign-On for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_single_signon_cf@2x.png'},
        { name: 'Spring Cloud Services for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_spring_cloud_services_cf@2x.png'},
        { name: 'Pivotal Cloud Foundry Service Broker for AWS', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_awsbroker@2x.png'},
        { name: 'Spring XD for PCF', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_springxd_cf@2x.png' },
        { name: 'Aerospike Service Broker for PCF (BETA)', author: 'Aerospike' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_aerospike@2x.png'},
        { name: 'Apigee Edge Service Broker for PCF', author: 'Apigee' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_apigee@2x.png'},
        { name: 'AppDynamics Service Broker for PCF', author: 'AppDynamics' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/Icon_appdynamics_cf.png'},
        { name: 'Cloudsoft Service Broker for PCF (BETA)', author: 'Cloudsoft' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_cloudsoft@2x.png'},
        { name: 'Dynatrace AppMon Service Broker for PCF', author: 'Dynatrace' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon-dynatrace.png'},
        { name: 'Dynatrace Ruxit Service Broker for PCF', author: 'Dynatrace' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon-dynatrace.png'},
        { name: 'EDB Postgres Service Broker for PCF', author: 'EDB' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_edbpostgres@2x.png'},
        { name: 'New Relic Service Broker for PCF', author: 'New Relic' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_newrelic_cf@2x.png'},
        { name: 'Redis Labs Enterprise Cluster Service Broker for PCF', author: 'Redis Labs', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_rlec@2x.png' }
      ],
      data: [
        {name: 'Pivotal GemFire', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_sqlfire@2x.png'},
        {name: 'Pivotal GemFire XD', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_sqlfire@2x.png'},
        {name: 'Pivotal Greenplum', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_gpdb@2x.png'},
        {name: 'Pivotal HDB', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotalHDB@2x.png'},
        {name: 'Pivotal PostgreSQL', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
        {name: 'Pivotal RTI', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
        {name: 'Pivotal SQLFire', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
        {name: 'Pivotal HD', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
      ],
      applications: [
        {name: 'Pivotal tc Server', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_tcserver@2x.png'},
        {name: 'Pivotal Web Server', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_webserver@2x.png'},
        {name: 'Flo for Spring XD', author: 'Pivotal', badge: 'BETA', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_spring_flo_beta_cf@2x.png'},
        {name: 'Pivotal RabbitMQ', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_rabbitmq@2x.png'}
      ]
    };

    $scope.filteredProducts = [
      { name: 'Buildpacks for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_buildpacks@2x.png'},
      { name: 'PCF Dev', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
      { name: 'PCF Elastic Runtime', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_elasticruntime@2x.png'},
      { name: 'PCF Metrics', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
      { name: 'PCF Ops Manager', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png'},
      { name: 'Stemcells for PCF', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotal_generic@2x.png' }
    ];

    _.mapValues($scope.products, function(productGroup, productGroupTitle) {
      _.map(productGroup, function(product) {
        product.version = faker.system.semver();

        var tags = _.find($scope.subnavLinks.pcf, {id: productGroupTitle});

        if (!! _.size(tags)) {
          product.tags = tags.tags;
        }
        $scope.filteredProducts.push(product);
      })
    });

    $scope.showProducts = function(type) {
      $scope.activeTypeFilter = type;
    }
  });
