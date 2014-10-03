var app = angular.module('devSocial');

app.controller('loginCtrl', function($scope, loginService) {

	$scope.submitLogin = function(user){
		
		loginService.submitLogin(user)
		.then(function(data){
			$scope.user=''; //should clear the object user and password
			alert(data.message);
			console.log(data);
		})
	}

})