'use strict';

describe('Directive: featuredProductCard', function () {

  // load the directive's module
  beforeEach(module('labsDesignYeoman'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<featured-product-card></featured-product-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the featuredProductCard directive');
  }));
});
