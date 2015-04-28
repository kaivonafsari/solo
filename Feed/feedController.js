console.log("Got Here!")

angular.module('app.feed', [])

.controller('feedController', function($scope){
	$scope.feed = new Instafeed ({
		get: 'tagged',
		tagName: 'vacation',
		sortBy: 'most-liked',
		//locationId: '46016173',
		clientId: 'd566482799964fb7ab74938650288eaa'
		});
		$scope.feed.run();
});