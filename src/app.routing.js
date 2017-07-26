angular.module('app')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/");
    }]);