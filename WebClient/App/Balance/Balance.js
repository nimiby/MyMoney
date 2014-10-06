'use strict';

var expenseModule = angular.module('Balance', []);

expenseModule.controller('BalanceController', function ($scope) {
    $scope.header = 'My Balance Report';
});