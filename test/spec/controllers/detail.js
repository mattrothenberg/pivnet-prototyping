'use strict';

describe('Controller: DetailctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('labsDesignYeoman'));

  var DetailctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailctrlCtrl = $controller('DetailctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetailctrlCtrl.awesomeThings.length).toBe(3);
  });
});
