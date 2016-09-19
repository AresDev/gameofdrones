'use strict';

describe('GameOfDrones.viewResult module', function() {
	beforeEach(module('GameOfDrones'));
	beforeEach(module('GameOfDrones.viewResult'));

	var $scope;
	var resultViewCtrl;
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		resultViewCtrl = $controller('ViewResultCtrl', {
			$scope: $scope
		});
	}));

	describe('resultView controller', function(){

	it('should be defined', inject(function($controller) {
      //spec body
      expect(resultViewCtrl).toBeDefined();
  	}));

	});
});