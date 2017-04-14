var Chiguru  = {};
app.controller('mainCtrl', ['$scope', '$location',function ($scope, $location) {
    Chiguru.baseUrl = $location.absUrl().split('#')[0]; //www.chiguruseva.com/
}])
