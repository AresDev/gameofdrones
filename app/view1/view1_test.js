'use strict';

describe('GameOfDrones.view1 module', function() {
	beforeEach(module('restangular'));
	beforeEach(module('GameOfDrones'));
	beforeEach(module('GameOfDrones.view1'));

  
  var $scope;
  var view1Ctrl;
  beforeEach(inject(function($rootScope, $controller) {
  	$scope = $rootScope.$new();
  	view1Ctrl = $controller('View1Ctrl', {
  		$scope: $scope
  	});
  }));

  describe('view1 controller', function(){
  	it('should be defined', inject(function($controller) {
      //spec body
      
      expect(view1Ctrl).toBeDefined();
  }));

  	it('should load moves', inject(function($controller) {
      //spec body
      
      expect(view1Ctrl).toBeDefined();
  }));

  });
});