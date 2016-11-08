appCtrl.controller('homeController', ['$scope','commonService', function($scope,commonService){
  $scope.title = commonService.name;
}]);
