'use strict';

var balanceModule = angular.module('Balance', []);

balanceModule.controller('BalanceController', function ($scope) {
    $scope.header = 'My Balance Report';
});