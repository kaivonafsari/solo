angular.module('app.header', [])

.controller('HeaderController', function($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
})