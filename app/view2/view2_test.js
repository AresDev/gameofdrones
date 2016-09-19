'use strict';

describe('GameOfDrones.view2 module', function() {
  beforeEach(module('GameOfDrones'));
  beforeEach(module('GameOfDrones.view2'));
  
  var $scope;
  var view2Ctrl;
  beforeEach(inject(function($rootScope, $controller) {
  	$scope = $rootScope.$new();
  	view2Ctrl = $controller('View2Ctrl', {
  		$scope: $scope
  	});
  }));

  describe('view2 controller', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      expect(view2Ctrl).toBeDefined();
    }));

  });
});