var app = angular.module('myApp', []);

app.controller('todoCtrl', function($scope) {

	$scope.personList = [];
	
	$scope.addPerson = function() {

		$scope.personList.push({
			person:$scope.person,
			father:$scope.father,
			mother:$scope.mother, 
			done:false
		});
		$scope.person = "";
		$scope.father = "";
		$scope.mother = "";
	};

	$scope.remove = function() {
		var oldList = $scope.personList;
		$scope.personList = [];
		angular.forEach(oldList, function(x) {
			if (!x.done) $scope.personList.push(x);
		});
	};
});