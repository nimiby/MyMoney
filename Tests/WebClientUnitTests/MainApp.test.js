'use strict';


describe('MyMoney App', function () {

    beforeEach(function () {
        this.MyMoneyApp = angular.mock.module('MyMoneyApp');
    });

    it('should have all routes', angular.mock.inject(function ($route) {
        expect($route.routes["/expense"]).toBeDefined();
        expect($route.routes["/balance"]).toBeDefined();
        expect($route.routes[null]).toBeDefined();
    }));
}); 