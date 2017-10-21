angular.module('gmailApp')
		.directive('inbox',function inboxDirective(){
			'use strict';
			return{
				restrict:'EA',
				replace:true,
				scope:true,
				templateUrl:"inbox_template.html",
				controllerAs:inbox,

				controller.function(InboxFactory){
					this.messages=[];

					this.goToMessage(id);
				};

				this.deleteMessage=function(id,index){
					InboxFactory.deleteMessage(id,index);
				};

				InboxFactory.getMessages()
						.then(angular.bind(this,function then(){
							this.messages=InboxFactory.messages;
						}));
			},
			link:function(scope,element,attrs,ctrl){}
		}
		});