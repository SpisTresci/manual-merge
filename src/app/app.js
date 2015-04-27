(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/merge');
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
])));
