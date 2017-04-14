app.controller('additionOfProjectCtrl', [
    '$scope',
    'WorkService',
    function ($scope, WorkService) {
        $scope.Project = {
            displayText : '',
            schoolName : '',
            date : '',
            location : '',
            address : '',
            content1 : '',
            content2 : '',
            content3 : '',
            content4 : '',
            content5 : '',
            Image1 : '',
            Image2 : '',
            Image3 : '',
            Image4 : '',
            Image5 : '',
        };
        $scope.addProject = function () {
            WorkService.addProject($scope.Project);
        }
    }
])
