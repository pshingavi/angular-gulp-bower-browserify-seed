(function () {
	'use strict';

	require('angular');
	require('angular-ui-router');
	var loginCtrl = require('./components/login/login.js');
	var XDCtrl = require('./components/xdcontrollers/xdcontrollers.js');
	
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

	// Load the controllers
	app.controller("LoginController", ['$scope', '$state', loginCtrl]);
	app.controller("XDController", ['$scope', '$state', XDCtrl]);

}());