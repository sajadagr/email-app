angular.module('gmailApp').directive('email', function emailDirective($timeout){
	'use strict';

	return{
		restrict: 'E';
		replace: true,
		scope: true,
		templateUrl: "template_email.html",
		controllerAs: 'email',
		controller: ($rootParams,$scope,emailFactory){
			this.message={};
			this.reply=function(message){
				emailFactory.reply(message);
			};
			var getmessage=emailFactory.getMessage($routeParams);
			if(getmessage){
				getmessage.then(angular.bind(this,function(response){
					emailFactory.message=response;
					this.message=emailFactory.message;
					$scope.$parent.email.title=this.message.subject;
				}));
			}
		},link:function(scope,element,attrs,ctrl){
			var textarea=element.find('.email_response-text')[0];

			scope.$watch('reply',function(newVal,oldVal){
				if(newVal==oldVal)
					return;

				if(newVal){
					$setTimeout(function() {
						textarea.focus();
					}, 0);
				}
			})
		}
	}
});