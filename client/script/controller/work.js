app.controller('workCtrl', [
    '$scope',
    'WorkService',
    '$location',
    function ($scope,WorkService,$location) {
        WorkService.getAllProjectsInShort(function (res) {
            $scope.WorkDone =  res;
        });

        $scope.CardDetailClickEvent = function (card) {
            $location.path('/project/'+card.id);
        }
    }
])
