console.log("Got Here!")

angular.module('app.stream', ['app', 'uiGmapgoogle-maps'])

.controller('streamController', function($scope){
	
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

	$scope.results = {}

	// $scope.getData = function(){
	// 	console.log("getData works!")
	// 	getPictures.thePics()
	// 		.then(function(results){
	// 			console.log(results)
	// 			$scope.results.push(result);
	// 		})
	// };

});