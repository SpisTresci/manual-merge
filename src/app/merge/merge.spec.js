describe('merge section', function () {
    beforeEach(module('manual-merge.merge'));
    beforeEach(module('restangular'));

    beforeEach(inject(function ($controller, _$location_, $rootScope, Restangular) {
        $location = _$location_;
        $scope = $rootScope.$new();
        MergeController = $controller('MergeController', { $location: $location, $scope: $scope, Restangular: Restangular});
    }));

    it('should pass a dummy test', inject(function () {
        expect(MergeController).toBeTruthy();
    }));

    it('should have a dummy test', inject(function() {
        expect(true).toBeTruthy();
    }));
});
