describe('AppController', function () {
    describe('isCurrentUrl', function () {
        var AppCtrl, $location, $scope;

        beforeEach(module('manual-merge'));

        beforeEach(inject(function ($controller, _$location_, $rootScope) {
            $location = _$location_;
            $scope = $rootScope.$new();
            AppCtrl = $controller('AppController', { $location: $location, $scope: $scope });
        }));

        it('should pass a dummy test', inject(function () {
            expect(AppCtrl).toBeTruthy();
        }));

        it("should check whether Merge is default page", inject(function ($urlRouter) {
            $scope.$emit("$locationChangeSuccess");
            expect($location.path()).toBe("/home");
        }));
    });
});
