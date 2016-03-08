'use strict';

describe('Controller: MainController', function () {

    // load the controller's module
    beforeEach(module('webappApp'));

    var MainCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainController', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(MainCtrl.size).toBe(1);
    });

    it('name after update should be ahmed', function () {
        expect(MainCtrl.getUserName()).toBe("ahmed");
    });
});
