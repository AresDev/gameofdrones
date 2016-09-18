'use strict';

angular.module('GameOfDrones.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['GameServices','$scope', '$location', function(GameServices, $scope, $location) {
$scope.selectedMove = GameServices.moves[0];
if(GameServices.moves.length > 0){
	$scope.round = 1;
	$scope.moves = GameServices.moves;
	$scope.currentPlayer = GameServices.getCurrentPlayer();
	$scope.ok = function(){
	  GameServices.playTurn($scope.selectedMove);
	  if(GameServices.gameOver){
	  	$location.path('/resultView');
	  }

	  $scope.round = GameServices.round;
	  $scope.currentPlayer = GameServices.getCurrentPlayer();
	  $scope.history = GameServices.history;
	};
}else{
	$location.path('/view1');
}
}]);