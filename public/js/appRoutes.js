angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MyItemsController'
        })
        .when('/recipient', {
            templateUrl: 'views/recipient.html',
            controller: 'RecipientController'
        });

    $locationProvider.html5Mode(true);
}]);
