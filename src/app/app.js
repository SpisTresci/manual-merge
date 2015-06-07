(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/merge');
    });

    app.config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://demo0236750.mockable.io/api/v1');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("manual-merge", [
    'manual-merge.merge',
    'manual-merge.home',
    'manual-merge.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'restangular'
])));
