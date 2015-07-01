module.exports = function($scope, $state) {
	$scope.state = $state;
  	console.log("Tab active : "+ $scope.state.current.name);
};