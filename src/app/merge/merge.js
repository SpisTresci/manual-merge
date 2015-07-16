(function(app) {

    app.controller('MergeController', function ($scope, Restangular) {
        var model = this;

        init();

        function init() {
            Restangular.one('pair').get().then(function(pair){
                model.bookA = pair.books[0];
                model.bookB = pair.books[1];
            }, function(){
                console.log("error");
            });
        }

    });

}(angular.module("manual-merge.merge")));
