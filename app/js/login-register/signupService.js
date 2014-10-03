var app = angular.module('devSocial');

app.service('signupService', function($http, $q) {
	this.submitNewUser = function(username){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:1212/signup.verifyUsername/',
			data: {
				username: username
			}
		}).success(function(data){
			deferred.resolve(data);
		})
		return deferred.promise

	}	
});