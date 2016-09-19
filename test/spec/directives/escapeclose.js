'use strict';

describe('Directive: escapeClose', function () {

  // load the directive's module
  beforeEach(module('labsDesignYeoman'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<escape-close></escape-close>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the escapeClose directive');
  }));
});
