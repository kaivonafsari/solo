//(function(){
angular.module('app', ['app.feed', 'app.hello', 'app.stream', 'ngRoute'])

.config(function($routeProvider, $httpProvider, $locationProvider){
	$routeProvider
		.when('/feed', {
		templateUrl: './feedHTML.html',
		controller: 'feedController'
		})

		.when('/', {
			templateUrl: '/helloHTML.html',
			controller: 'helloController'
		})

		.when('/stream', {
			templateUrl: '/streamHTML.html',
			controller: 'streamController'
		})
})

.factory('getPictures', function($http){
	var thePics = function(){
		return $http({
			method: 'GET',
			url: '/stream',	
		}).then(function(res){
			console.log("THIS IS THE DATA" + res)
			return res
		})
	}
})
//})();