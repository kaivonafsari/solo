angular.module('app.hello', [])

.controller('helloController', function($scope){
	$scope.test = function(){console.log("Hello");};
});