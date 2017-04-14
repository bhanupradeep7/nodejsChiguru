// var ServerUrl = "http://localhost/series/chiguru/chigurusevatrust";
// $(document).ready(function(){
// 	var jqxhr = $.ajax({ url: ServerUrl+"/description/" })
// 		.done(function(res) {
// 			console.log(res);
// 			var obj = JSON.parse(res)
// 			$('h1').text(obj[0].value);
// 		})
// 		.fail(function(res) {
// 			console.log(res);
// 			$('h1').text("Failed to Connect DataBase");
// 		});
// });

var app = angular.module('myApp',['ngRoute','ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './client/partials/home.html',
			controller : 'homeCtrl'
        })
		.state('about', {
            url: '/about',
            templateUrl: './client/partials/about.html',
			controller : 'aboutCtrl'
        })
		.state('work', {
            url: '/projectList',
            templateUrl: './client/partials/work.html',
			controller : 'workCtrl'
        })
        .state('workDetail', {
            url: '/project/:id',
            templateUrl: './client/partials/workDetail.html',
			controller : 'workDetailCtrl'
        })
		.state('contact', {
            url: '/contact',
            templateUrl: './client/partials/contact.html',
			controller : 'contactCtrl'
        })
        .state('donate', {
            url: '/donate',
            templateUrl: './client/partials/donate.html',
			controller : 'donateCtrl'
        })

        .state('AddProject', {
            url: '/api/addProject',
            templateUrl: './client/partials/additionOfProject.html',
			controller : 'additionOfProjectCtrl'
        })
});
