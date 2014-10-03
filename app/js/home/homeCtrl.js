var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope) {
	$scope.showingLogin = !$scope.showingLogin;
	$scope.showingSignup = !$scope.showingSignup;
	
	

	$scope.showLogin = function(){
		$scope.showingLogin = !$scope.showingLogin;
		$scope.showingSignup = false;
	}

	$scope.showSignup = function() {
		$scope.showingSignup = !$scope.showingSignup;
		$scope.showingLogin = false;
	}
})