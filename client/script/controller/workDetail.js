app.controller('workDetailCtrl', [
    '$scope',
    'WorkService',
    '$location',
    function ($scope,WorkService, $location) {
        $scope.IdOfProject = parseInt($location.$$path.split('/')[3]);
        // console.log($scope.IdOfProject);
        WorkService.getProjectDetail($scope.IdOfProject, function(res) {
            $scope.WorkDetail = res;
        });
        
    }
])
