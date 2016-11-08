appService.factory('cartService', function() {
  var myCart = new shoppingCart('AngularStore');
  return {
    cart: myCart
  }
});
