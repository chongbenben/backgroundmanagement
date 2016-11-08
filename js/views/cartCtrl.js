appCtrl.controller('cartController', ['$scope', 'cartService', function($scope, cartService){
  var vm = $scope;
  vm.cart = cartService.cart;
}]);
