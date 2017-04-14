app.controller('aboutCtrl', ['$scope',function ($scope) {
    $scope.leftNavElements = [
        {
            active : true,
            title : "about us"
        },
        {
            active : false,
            title : "vision and Mission"
        },
        {
            active : false,
            title : "History"
        },
        {
            active : false,
            title : "Financials"
        }
    ];

    $scope.LeftNavElementClick = function (elem) {
        $scope.leftNavElements.forEach(function (item) {
            item.active = false;
        });
        elem.active = true;
    }
}])
