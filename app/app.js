'use strict';
var apiServiceURL = window.location.protocol + "//private-4c4fc-gameofdrones.apiary-mock.com/";
// Declare app level module which depends on views, and components
var GameOfDrones =	angular.module('GameOfDrones', [
					  'ngRoute',
					  'ui.bootstrap',
					  'restangular',
					  'GameOfDrones.view1',
					  'GameOfDrones.view2',
					  'GameOfDrones.resultView',
					  'GameOfDrones.version'
					]).
					config(['$locationProvider', '$routeProvider', 'RestangularProvider', function($locationProvider, $routeProvider, RestangularProvider) {
					  $locationProvider.hashPrefix('!');
					  RestangularProvider.setBaseUrl(apiServiceURL);
					  $routeProvider.otherwise({redirectTo: '/view1'});
					}]);
