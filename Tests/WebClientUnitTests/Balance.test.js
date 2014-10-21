'use strict';

// testing the Balance module
describe('Balance module', function () {

    // mock the initilization of the Balance module
	beforeEach(module('Balance'));

    // main controller
	describe('Controller', function () {

        // mock the creation of the controller
	    beforeEach(inject(function ($controller, $rootScope) {
	        this.scope = $rootScope.$new();
	        this.ctrl = $controller('BalanceController', { $scope: this.scope });
	    }));

	    it('should exist', inject(function ($controller) {
            expect(this.ctrl).toBeDefined();
	    }));

	    it('should initilize the scope with the header', function () {
	        expect(this.scope.header).toBe('My Balance Report');
	    });
	});
});