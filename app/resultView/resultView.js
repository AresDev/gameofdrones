'use strict';

angular.module('GameOfDrones.resultView', ['ngRoute','ui.bootstrap','GameOfDrones'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resultView', {
    templateUrl: 'resultView/resultView.html',
    controller: 'ResultViewCtrl'
  });
}])

.controller('ResultViewCtrl', ['GameServices','$scope','$location',function(GameServices, $scope, $location) {
	$scope.winner = GameServices.winner;
	$scope.playAgain = function(){
		$location.path('/view1');
	}
}]);