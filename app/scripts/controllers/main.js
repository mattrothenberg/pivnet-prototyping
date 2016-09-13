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
      // $scope.$broadcast('angucomplete-alt:changeInput', 'productSearch', ' ');
      $timeout(function() {
        document.getElementById('productSearchInput').focus();
      })

      $scope.searchIsFocused = true;
    }

    // $scope.$watch('productSearch', function(newValue, oldValue) {
    //   if ( newValue.length > 0 ) {
    //     $scope.userIsSearching = true;
    //     $scope.resultsLoading = false;
    //   } else {
    //     $scope.userIsSearching = false;
    //     $scope.resultsLoading = false;
    //   }
    // }, 1500)

    $scope.subnavLinks = {
      pcf: [
        { id: 'core', tags: ['pcf', 'cloud foundry', 'core'], name: 'Core', icon: 'fa-cloud'},
        { id: 'datastores', tags: ['data', 'datastores', 'database'], name: 'Datastores', icon: 'fa-database'},
        { id: 'monitoring', tags: ['log', 'logs', 'monitoring'], name: 'Logs & Monitoring', icon: 'fa-file-text'},
        { id: 'mobile', tags: ['mobile', 'phone', 'dev', 'tools', 'development'], name: 'Mobile Dev Tools', icon: 'fa-mobile' },
        { id: 'messaging', tags: ['messaging', 'cache', 'caching', 'cacheing', 'queue'], name: 'Caching & Messaging', icon: 'fa-comment' },
        { id: 'developer', tags: ['mobile', 'phone', 'dev', 'tools', 'development'], name: 'Dev Tools', icon: 'fa-code'}
      ]
    };

    $scope.products = {
      core: [
        { name: 'PCF Elastic Runtime', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        { name: 'Stemcells for PCF', author: 'Pivotal', icon: 'images/icons/default.svg' },
        { name: 'Buildpacks for PCF', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        { name: 'PCF Ops Manager', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        { name: 'PCF Dev', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        { name: 'PCF Metrics', author: 'Pivotal' , icon: 'images/icons/default.svg'}
      ],
      datastores: [
        { name: 'MySQL for PCF', author: 'Pivotal' , icon: 'images/icons/mysql.svg'},
        { name: 'DataStax Enterprise for PCF', author: 'DataStax' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_datastaxenterprise_cf@2x.png'},
        { name: 'Riak CS for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_riakcsdev_cf@2x.png'},
        { name: 'Dingo PostgreSQL for PCF', author: 'Dingo', badge: 'BETA', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_dingopostgresql@2x.png'}
      ],
      monitoring: [
        { name: 'Spring Insight for PCF', author: 'Pivotal' , icon: 'images/icons/spring-insight.svg'},
        { name: 'PCF Log Search', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pcfLogSearch@2x.png'},
        { name: 'ISS Knowtify Search Analytics for PCF', author: 'ISS' , icon: 'images/icons/knowtify.svg'}
      ],
      mobile: [
        { name: 'Push Notification for PCF', author: 'Pivotal' , icon: 'images/icons/push-notifications-service.svg'},
        { name: 'API Gateway for PCF', author: 'Pivotal' , icon: 'images/icons/api-gateway.svg'},
        { name: 'App Distribution for PCF', author: 'Pivotal' , icon: 'images/icons/distribution.svg'},
        { name: 'App Analytics', author: 'Pivotal', badge: 'Beta', icon: 'images/icons/default.svg'},
      ],
      messaging: [
        { name: 'RabbitMQ for PCF', author: 'Pivotal' , icon: 'images/icons/rabbit-mq.svg'},
        { name: 'GemFire for PCF', author: 'Pivotal' , icon: 'images/icons/gemfire.svg'},
        { name: 'Session State Caching Powered by GemFire for PCF', author: 'Pivotal' , icon: 'images/icons/session-state-caching.svg'},
        { name: 'Redis for PCF', author: 'Pivotal' , icon: 'images/icons/redis.svg'},
        { name: 'Kafka for PCF', author: 'Pivotal' , icon: 'images/icons/default.svg'}
      ],
      developer: [
        { name: 'PCF Dev', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        { name: 'Data Sync', author: 'Pivotal' , icon: 'images/icons/data-sync.svg'},
        { name: 'IPSec Add-on for PCF', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        { name: 'Pivotal Tracker for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_pivotaltracker_cf@2x.png'},
        { name: 'Cloudbees Jenkins Operations Center for PCF', author: 'CloudBees' , icon: 'images/icons/jenkins.svg'},
        { name: 'CloudBees Jenkins Platform for PCF', author: 'CloudBees' , icon: 'images/icons/jenkins.svg'},
        { name: 'Concourse', author: 'Concourse', badge: 'Alpha', icon: 'https://pbs.twimg.com/profile_images/714899641628753920/3C8UrVPf.jpg'},
        { name: 'GitLab Enterprise Plus for PCF', author: 'GitLab' , icon: 'images/icons/gitlab.svg'},
        { name: 'JFrog Artifactory for PCF', author: 'JFrog' , icon: 'images/icons/jfrog.svg'},
        { name: 'Single Sign-On for PCF', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_single_signon_cf@2x.png'},
        { name: 'Spring Cloud Services for PCF', author: 'Pivotal' , icon: 'images/icons/spring-cloud-services.svg'},
        { name: 'Pivotal Cloud Foundry Service Broker for AWS', author: 'Pivotal' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_awsbroker@2x.png'},
        { name: 'Spring XD for PCF', author: 'Pivotal', icon: 'images/icons/spring-xd.svg' },
        { name: 'Aerospike Service Broker for PCF (BETA)', author: 'Aerospike' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_aerospike@2x.png'},
        { name: 'Apigee Edge Service Broker for PCF', author: 'Apigee' , icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_apigee@2x.png'},
        { name: 'AppDynamics Service Broker for PCF', author: 'AppDynamics' , icon: 'images/icons/app-dynamics.svg'},
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
        {name: 'Pivotal PostgreSQL', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        {name: 'Pivotal RTI', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        {name: 'Pivotal SQLFire', author: 'Pivotal' , icon: 'images/icons/default.svg'},
        {name: 'Pivotal HD', author: 'Pivotal' , icon: 'images/icons/pivotal-hd.svg'},
      ],
      applications: [
        {name: 'Pivotal tc Server', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_tcserver@2x.png'},
        {name: 'Pivotal Web Server', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_webserver@2x.png'},
        {name: 'Flo for Spring XD', author: 'Pivotal', badge: 'BETA', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_spring_flo_beta_cf@2x.png'},
        {name: 'Pivotal RabbitMQ', author: 'Pivotal', icon: 'https://dtb5pzswcit1e.cloudfront.net/assets/images/product_logos/icon_rabbitmq@2x.png'}
      ]
    };

    $scope.filteredProducts = [];

    String.prototype.capitalizeFirstLetter = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }

    _.mapValues($scope.products, function(productGroup, productGroupTitle) {
      _.map(productGroup, function(product) {
        product.version = faker.system.semver();

        var groupObj = _.find($scope.subnavLinks.pcf, {id: productGroupTitle});
        if ( !! _.size(groupObj) ) {
          product.group = groupObj.name;
        } else {
          product.group = productGroupTitle.capitalizeFirstLetter();
        }

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
