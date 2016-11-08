function shoppingCart(cartName) {
  this.cartName = cartName;
  this.clearCart = false;
  this.items = [];

  // 初始化时加载本地购物车存储内容
  this.loadItems();

  // 当页面卸载时存储购物车信息到本地
  var self = this;
  $(window).unload(function () {
      if (self.clearCart) {
          self.clearItems();
      }
      self.saveItems();
      self.clearCart = false;
  });
}

// 从本地存储中载入购物信息
shoppingCart.prototype.loadItems = function () {
  var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
  if (items != null && JSON != null) {
      try {
          var items = JSON.parse(items);
          for (var i = 0; i < items.length; i++) {
              var item = items[i];
              if (item.sku != null && item.name != null && item.price != null && item.quantity != null) {
                  item = new cartItem(item.sku, item.name, item.price, item.quantity);
                  this.items.push(item);
              }
          }
      }
      catch (err) {
          // 当loading时忽略错误...
      }
  }
}

// 添加商品到购物车
shoppingCart.prototype.addItem = function (sku, name, price, quantity) {
    quantity = this.toNumber(quantity);
    if (quantity != 0) {

        // 如果购物车里存在商品，更新数量
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++) {
            var item = this.items[i];
            if (item.sku == sku) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }

        // 新商品，放到购物车里
        if (!found) {
            var item = new cartItem(sku, name, price, quantity);
            this.items.push(item);
        }

        // 本地存储更新
        this.saveItems();
    }
}

// 存储购物信息到本地
shoppingCart.prototype.saveItems = function () {
    if (localStorage != null && JSON != null) {
        localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
    }
}

// 获得购物车内所有商品总价
shoppingCart.prototype.getTotalPrice = function (sku) {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (sku == null || item.sku == sku) {
            total += this.toNumber(item.quantity * item.price);
        }
    }
    return total;
}

// 获得购物车内所有商品总数
shoppingCart.prototype.getTotalCount = function (sku) {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (sku == null || item.sku == sku) {
            count += this.toNumber(item.quantity);
        }
    }
    return count;
}

// 清空购物车
shoppingCart.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
}

// 转换为数字
shoppingCart.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
}

// 购物车商品构造函数
function cartItem(sku, name, price, quantity) {
    this.sku = sku;
    this.name = name;
    this.price = price * 1;
    this.quantity = quantity * 1;
}

function switchPage(index) {
    $('.nav-tabs>li').eq(index).addClass('active').siblings().removeClass('active');
  }
