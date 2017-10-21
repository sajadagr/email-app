var app= angular.module("gmailApp",['ngRoute','ngSanitize']);
//-------------Routing--------------------------------------------------//
app.config(function($routeProvider){
	'use strict'
	$routeProvider
		.when('/inbox',{
			templateUrl:'inbox.html',
			controller:'inboxController',
			controllerAs:'inbox'
	})
		.when('inbox/email/:id',{
			templateUrl:'email.html',
			controller: 'emailController',
			controllerAs: 'email'
		})
		.otherwise({
			redirectTo:'inbox'
		});
}).run(function($rootScope){
	$rootScope.$on('rootChangeError',function(event,current,previous,rejection){
		console.log(event,current,previous,rejection)
	})
});