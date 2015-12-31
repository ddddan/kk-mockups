angular.module('KKService', []).factory('KKItem', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/kkitems');
        },

        create: function (kkData) {
            return $http.post('/api/kkitems', kkData);
        },

        delete: function (id) {
            return $http.delete('/api/kkitems' + id);
        }
    };
}]);
