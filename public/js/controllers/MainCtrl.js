angular.module('MainCtrl', []).controller('MainController', ['$scope', '$location', function($scope, $location){
    $scope.$location = $location;
    $scope.isActive = function(view) {
        if ($location.path() === '/' + view) {
            return true;
        }
        return false;
    };
}]);
