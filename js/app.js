var angularStore = angular.module('AngularStore', ['ngRoute', 'app-ctrl', 'app-service']);

angularStore.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/store', {
      templateUrl: '/partials/store.html',
      controller: 'storeController'
    })
    .when('/home', {
      templateUrl: '/partials/home.html',
      controller: 'homeController'
    })
    .when('/shopping', {
      templateUrl: '/partials/shopping.html',
      controller: 'shoppingController'
    })
    .when('/tuijian', {
      templateUrl: '/partials/tuijian.html',
      controller: 'tuijianController'
    })
    .when('/contact', {
      templateUrl: '/partials/contact.html',
      controller: 'contactController'
    })
    .when('/cart', {
      templateUrl: '/partials/shoppingCart.html',
      controller: 'cartController'
    })
    .when('/product/:productSku', {
      templateUrl: '/partials/product.html',
      controller: 'storeController'
    })
    .otherwise({
      redirectTo: '/home'
    })
}]);
