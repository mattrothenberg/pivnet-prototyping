'use strict';

describe('Directive: ProductCard', function () {

  // load the directive's module
  beforeEach(module('labsDesignYeoman'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-product-card></-product-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ProductCard directive');
  }));
});
