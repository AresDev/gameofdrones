'use strict';

angular.module('GameOfDrones.view1', ['ngRoute','ui.bootstrap','GameOfDrones'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['GameServices','$scope', '$location', function(GameServices, $scope, $location) {
	$scope.players = {};
	$scope.startGame = function (){
		GameServices.init($scope.players).then(function(){
			 $location.path('/view2');
		});
		
	};
}]);