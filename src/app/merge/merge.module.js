(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('merge', {
            url: '/merge',
            views: {
                "main": {
                    controller: 'MergeController as model',
                    templateUrl: 'merge/merge.tpl.html'
                }
            },
            data:{ pageTitle: 'Merge' }
        });
    });

}(angular.module("manual-merge.merge", [
    'ui.router',
    "restangular"
])));
