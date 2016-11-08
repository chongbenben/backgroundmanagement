appCtrl.controller('storeController', ['$scope', 'storeService', 'cartService','commonService', '$routeParams', function($scope, storeService, cartService,commonService, $routeParams){
  var vm = $scope;
  vm.store = storeService.store;
  vm.cart = cartService.cart;
  vm.title = commonService.name;
  // 用于产品详情展示
  if ($routeParams.productSku != null) {
    vm.product = vm.store.getProduct($routeParams.productSku);
  }
  vm.sort = function(){
    console.log(1);
  }
  vm.order = 'name';
}]);
