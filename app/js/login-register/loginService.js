var app = angular.module('devSocial');

app.service('loginService', function($http, $q) {

	this.submitLogin = function(userObj){
		console.log(userObj);
		var deferred = $q.defer();
		$http({
			method:'POST',
			url: 'http://localhost:1212/loginUser',
			data: {
				user: userObj
			}
		}).success(function(data){
			deferred.resolve(data);
		})
		return deferred.promise;

	}
});