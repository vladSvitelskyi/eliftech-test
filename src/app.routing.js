angular.module('app')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/");
        // $stateProvider
        //     .state('home', {
        //         url: '/',
        //         templateUrl: './views/home/home.html',
        //         controller: 'homeController'
        //     })
    }]);