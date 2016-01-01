angular.module('MainCtrl', []).controller('MainController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    // Set storage of uname
    var uname = 'testUser'; // Will be obtained from url
    // If not set, display login screen instead
    if (!uname) {
        
    } else {
        if ($window.Storage) {
            $window.sessionStorage.setItem('uname', uname);
        }

        $scope.$location = $location;
        $scope.isActive = function (view) {
            if ($location.path() === '/' + view) {
                return true;
            }
            return false;
        };
    }
}]);
