angular.module('app')
    .factory('mainService', ['$http', 'config', function($http, config) {
        var publicMethods = {
            getData: function() {
                return $http.get(config.base + config.prefix + config.companies + config.apiKey)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error getData!',err);
                    });
            },
            postData: function(company) {
                return $http.post(config.base + config.prefix + config.companies + config.apiKey, company)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error postData', err);
                    });
            },
            putData: function(company) {
                return $http.put(config.base + config.prefix + config.companies + config.apiKey, company)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error putData', err);
                    });
            },
            deleteData: function(company) {
                return $http.delete(config.base + config.prefix + config.companies + config.apiKey, company)
                    .then(function(response) {
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log('Error deleteData', err);
                    });
            }              
        };
        return publicMethods;
    }]);