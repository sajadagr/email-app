var app= angular.module("gmailApp",[ngRoute]);
app.controller("inboxController",['$scope',function($scope){
	$scope.title="This is test message!!!"
}])

//-------------Routing------------------------------------------------------------------------//
app.config(function($routeProvider){
	$routeProvider
		.when('/inbox',{
			templateUrl:'views/inbox.html',
			controller:'inboxController',
			controllerAs:'inbox'
	})
		.when('inbox/email/:id',{
			templateUrl:'views/email.html',
			controller: 'emailController',
			controllerAs: 'email'
		})
		.otherwise({
			redirectTo:'inbox'
		});
//----------Routing Ends-----------------------------------------------------------------------------//


//-----------Factory----------------------------------------------------------------------------------//
angular.module('gmailApp')
app.factory('inboxFactory',function inboxFactory($q,$http,$location){
	'use strict';
	var exports={};
	exports.messages=[];
	
	exports.goToMessage=function(id){
		if(angular.isNumber(id)){
			console.log('inbox/email/'+id)
			$location.path('inbox/email/'+id)
		}
	}
	
	exports.deleteMessage=function(id,index){
		this.messages.splice(index,1);
	}

	exports.getMessages
});
//---------------Factory Ends--------------------------------------------------------------------------//

//-------------Linking factory and controller to get messages in inbox----------------------------------//
angular.module('gmailApp').controller('inboxController',function inboxController($scope,inboxFactory){
	'use strict';
	$scope.meta={
		title:"My Inbox"
	};
	inboxFactory.getMessages()
			.success(function(jsonData,statusCode){
				console.log('The request was successful.'.statusCode);
				console.dir(jsonData);
				$scope.data={
					emails:jsonData
				};
			});
});
//----------------Linking Ends-------------------------------------------------------------------------//

}); 