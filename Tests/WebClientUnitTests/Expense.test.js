'use strict';

// testing the Balance module
describe('Expense module', function () {

    // mock the initilization of the Balance module
	beforeEach(module('Expense'));

    // main controller
	describe('Controller', function () {

        // mock the creation of the controller
	    beforeEach(inject(function ($controller, $rootScope) {
	        this.scope = $rootScope.$new();
	        this.ctrl = $controller('ExpenseController', { $scope: this.scope });
	    }));

	    it('should exist', inject(function ($controller) {
            expect(this.ctrl).toBeDefined();
	    }));

	    it('should initilize the scope with the header', function () {
	        expect(this.scope.header).toBe('My Expense Report');
	    });
	});
});