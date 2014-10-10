"use strict";

var app = angular.module("MyMoneyApp", ['ngRoute', 'Expense', 'Balance', 'mgcrea.ngStrap']);

app.config(function ($routeProvider) {
    $routeProvider.when('/expense', {
        templateUrl: '/WebClient/App/Expense/Expense.html',
        controller: 'ExpenseController'
    }).when('/balance', {
        templateUrl: '/WebClient/App/Balance/Balance.html',
        controller: 'BalanceController'
    }).otherwise({
        redirectTo: 'expense'
    });
});

 

app.controller('MainPageController', function ($scope) {

});
