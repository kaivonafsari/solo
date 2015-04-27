angular.module('rd', ['ngRoute'])

.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when('/feed', {
		templateUrl: 'roughDRAFT.html',
		controller: 'feedController'
		})
})