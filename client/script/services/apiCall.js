app.factory('apiCall', [
    '$http',
    function ($http) {
        return function (url, type, callback, data) {
            if(type=="GET"){
                $http.get(url)
                    .then(function Success(res) {
                        callback(res);
                    }, function Failure(res) {
                        callback(res);
                    });
            }else{
                $http.post(url,data)
                    .then(function Success(res) {
                        callback(res);
                    }, function Failure(res) {
                        callback(res);
                    });
            }
        }
    }

])
