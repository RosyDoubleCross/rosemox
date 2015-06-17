rosemoxApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/tiles');

    $stateProvider.state('tiles', {
        url: '/tiles',
        controller: 'TilesController',
        templateUrl: 'app/components/tiles/tilesView.html'
    });

}]);

