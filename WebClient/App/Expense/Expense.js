'use strict';

var expenseModule = angular.module('Expense', []);

expenseModule.controller('ExpenseController', function ($scope) {
    $scope.header = 'My Expense Report';
});