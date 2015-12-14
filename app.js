angular.module('howtossqsignon', ['ngMaterial'])
    .controller('mainCtrl', function($scope, $http) {

        getItems();

        function getItems() {
            $http.get('/items')
                .success(function(result) {
                    $scope.items = result.items;
                });
        }

    });
