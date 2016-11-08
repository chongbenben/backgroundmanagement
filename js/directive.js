angularStore.directive('cartInfo', function(){
  return {
    restrict: 'E',
    templateUrl: './partials/directiveCartInfo.html',
    scope: true,
    link: function(scope, elem, attrs) {
      if(attrs.isShow == 'true') {
        scope.isShow = true;
      }
    },
    controller: function($scope) {
      $scope.isShow = false;
    }
  }
})
