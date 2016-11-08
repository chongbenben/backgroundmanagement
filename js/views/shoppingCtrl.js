appCtrl.controller('shoppingController',['$scope','commonService', function($scope,commonService){
  $scope.title = commonService.name;
}]);
