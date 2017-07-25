angular.module('app')
    .controller('mainController', ['$scope', 'mainService', function($scope, mainService) {

        $scope.companiesModel = [];
        $scope.editEnabled = false;

        getData();

        function getData() {
            mainService.getData()
                .then(function(data) {
                    $scope.companiesModel = data;
                    updateTotal(data);
                });
        };

        function updateData() {
            mainService.putData($scope.companiesModel);
        }

        function updateTotal(dataModel) {
            debugger;
            var mainSum = 0,
                subSum = 0;
            for (var i = 0; i < dataModel.length; i++) {
                mainSum = 0;
                for (var j = 0; j < dataModel[i].nodes.length; j++) {
                    subSum = 0;
                    if (dataModel[i].nodes[j].total === 0 || dataModel[i].nodes[j].nodes.length === 0) {
                        dataModel[i].nodes[j].total = 0;
                        dataModel[i].nodes[j].total += +(dataModel[i].nodes[j].earnings);
                    }
                    mainSum += dataModel[i].nodes[j].total;
                    dataModel[i].total = mainSum + subSum + +(dataModel[i].earnings);
                    for (var k = 0; k < dataModel[i].nodes[j].nodes.length; k++) {
                        if (dataModel[i].nodes[j].nodes[k].total === 0 || dataModel[i].nodes[j].nodes[k].nodes.length === 0) {
                            dataModel[i].nodes[j].nodes[k].total = 0;
                            dataModel[i].nodes[j].nodes[k].total += +(dataModel[i].nodes[j].nodes[k].earnings);
                        }
                        subSum += dataModel[i].nodes[j].nodes[k].total;
                        dataModel[i].nodes[j].total = subSum + +(dataModel[i].nodes[j].earnings);
                    }
                }
            }
        }

        $scope.addCompany = function(newCompany) {
            newCompany.total = 0;
            newCompany.nodes = [];

            mainService.postData(newCompany)
                .then(function() {
                    newCompany.total += +(newCompany.earnings);
                    $scope.companiesModel.push(newCompany);
                    $scope.newCompany = null;
                });
        };

        $scope.addSubCompany = function(scope) {
            var nodeData = scope.$modelValue;

            nodeData.nodes.push({
                name: "",
                earnings: 0,
                total: 0,
                nodes: []
            });

            updateData();
        };

        $scope.edit = function(scope) {
            $scope.editEnabled = true;
        }

        $scope.save = function(scope) {
            updateTotal($scope.companiesModel);
            updateTotal($scope.companiesModel);

            updateData();

            $scope.editEnabled = false;
        };

        $scope.delete = function(scope) {
            scope.remove();
            updateTotal($scope.companiesModel);
            updateData();
        };

        $scope.toggle = function(scope) {
            scope.toggle();
        };

        $scope.collapseAll = function() {
            $scope.$broadcast('angular-ui-tree:collapse-all');
        };

        $scope.expandAll = function() {
            $scope.$broadcast('angular-ui-tree:expand-all');
        };

    }])