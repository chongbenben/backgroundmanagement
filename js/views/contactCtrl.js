appCtrl.controller('contactController', ['$scope','commonService', function($scope,commonService){
  $scope.title = commonService.name;
}]);
