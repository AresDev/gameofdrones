'use strict';

angular.module('GameOfDrones.viewResult', ['ngRoute','GameOfDrones'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewResult', {
    templateUrl: 'viewResult/viewResult.html',
    controller: 'ViewResultCtrl'
  });
}])

.controller('ViewResultCtrl', ['GameServices','$scope','$location',function(GameServices, $scope, $location) {
	$scope.winner = GameServices.winner;
	$scope.playAgain = function(){
		$location.path('/view1');
	}
}]);