angular.module('app.routes', ['ngRoute'])
	
	.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl: 'app/views/pages/home.html'
		});

		$routeProvider.when('/login',{
			templateUrl: 'app/views/pages/login.html'
		})

		$locationProvider.html5Mode(true);
	});