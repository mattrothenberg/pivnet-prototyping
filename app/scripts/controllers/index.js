'use strict';

/**
 * @ngdoc function
 * @name labsDesignYeoman.controller:IndexCtrl
 * @description
 * # IndexctrlCtrl
 * Controller of the labsDesignYeoman
 */
angular.module('labsDesignYeoman')
  .controller('IndexCtrl', function ($scope, $timeout, ProductService, $state) {
    $scope.activeTypeFilter = 'pcf';
    $scope.productSearch;
    $scope.products = ProductService.getProducts();
    $scope.filteredProducts = [];

    $scope.$watch('productSearch', function(nv, ov) {
      if(nv !== ov) {
        $state.go('detail', {id: nv.originalObject.guid})
      }
    })

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
      });
    });

    $scope.scrollToSearch = function() {
      $timeout(function() {
        document.getElementById('productSearchInput').focus();
      });

      $scope.searchIsFocused = true;
    };

    $scope.showProducts = function(type) {
      $scope.activeTypeFilter = type;
    };
  });
