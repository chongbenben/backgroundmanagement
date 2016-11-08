appService.factory('storeService', function() {
  var myStore = new store();

  return {
    store: myStore
  }
});
