var moxRender = angular.module('moxRender', ['ui.router']);

moxRender.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        controller: 'SimpleController',
        templateUrl: 'partials/view1.html'
    }).state('nope', {
        url: '/nope',
        controller: 'SimpleController',
        templateUrl: 'partials/view2.html'
    });
}]);

moxRender.controller('SimpleController', function($scope) {
    $scope.tiles = [
        { id: 1, name: 'index'},
        { id: 2, name: 'logo'},
        { id: 3, name: 'rxx'}
    ];

    $scope.maxTileId = 3;

    $scope.addTile = function() {
        $scope.tiles.push({
            id: ++$scope.maxTileId,
            name: $scope.newTile.name
        });
    }
});

