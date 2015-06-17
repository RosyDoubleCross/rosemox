rosemoxApp.controller('TilesController', function($scope) {
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

