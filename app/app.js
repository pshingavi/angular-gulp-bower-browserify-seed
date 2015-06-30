(function () {
	'use strict';

	var app = angular.module('cloudbot', ['ui.router']);

	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state("login", {
		  url: "/login",
		  templateUrl: "components/login/login.html",
		  controller: "LoginController"
		})
		.state("xdcontrollers", {
		  url: "/xdcontrollers",
		  templateUrl: "components/xdcontrollers/xdcontrollers.html",
		  controller: "XDController"
		});
		// Send to login if the URL was not found
		$urlRouterProvider.otherwise("/login");
		}]);

	app.controller("LoginController", ['$scope', '$state', function($scope, $state){
  		$scope.state = $state;
  		console.log("Tab active : "+ $scope.state.current.name);
	}]);

	app.controller("XDController", ['$scope', '$state', function($scope, $state){
  		$scope.state = $state;
  		console.log("Tab active : "+ $scope.state.current.name);
	}]);
}());