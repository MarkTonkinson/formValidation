var app = angular.module('devSocial');

app.controller('signupCtrl', function($scope, signupService) {

	$scope.submitSignup = function(username) {
		console.log(username);
		signupService.submitNewUser(username)
		.then(function(data){
			console.log(data);
		})

		
	}

	
})