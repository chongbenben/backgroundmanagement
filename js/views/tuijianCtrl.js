appCtrl.controller('tuijianController', ['$scope', 'commonService', '$http', function($scope, commonService, $http) {
  $scope.title = commonService.name;
  $scope.order = 'id';
  $scope.items = [];
  $http.get('http://localhost:3100/goodAll')
    .then(function(res) {
      console.log(res);
      $scope.items = res.data;
      // console.log($scope.items);
    }, function() {});
  $(function() {
    $('#myModal').modal('hide');
    $('#myModal').on('hide.bs.modal', function() {
      console.log('关闭模态框1');
    });
    $("#submitBtn").click(function(){
    //  console.log($("#shopId").val()+$("#shopName").val()+$("#shopPrice").val()+$("#shopSrc").val());
    var shopId = $("#shopId").val();
    var shopName = $("#shopName").val();
    var shopPrice = $("#shopPrice").val()
    var shopSrc = $("#shopSrc").val()
      $.ajax({
        url: "http://localhost:3100/goodAdd?id="+shopId+"&name="+shopName+"&price="+shopPrice+"&img="+shopSrc+"",
        success: function() {
          console.log("添加成功");
          $('#myModal').modal('hide');
           window.location.reload();
        },
        error:function(){
          console.log("添加失败");
        }
      });
    })
  });
  switchPage(1);
  $(".goodlist111").on('click', '#delbtn', function() {
    if (confirm("你确定删除吗？")) {
      var delid = ($(this).parent().parent().children('.shoplistid').html());
      $.ajax({
        url: "http://localhost:3100/goodDel?id="+delid,
        success: function() {
          console.log("删除成功");
          window.location.reload();
        },
        error:function(){
          console.log("删除失败");
        }
      });
       }
       else {
           console.log("取消删除");
       }
  });


  $(".goodlist111").on('click', '#updatebtn', function() {
      var updateid = ($(this).parent().parent().children('.shoplistid').html());
      var updatename = ($(this).parent().parent().children('.shoplistname').html());
      var updateprice = ($(this).parent().parent().children('.shoplistprice').html());
      var updateimg = ($(this).parent().parent().children('.shoplistimg').children(0).attr('src'));
      $("#upId").val(updateid);
      $("#upName").val(updatename);
      $("#upPrice").val(updateprice);
      $("#upSrc").val(updateimg);
  });
  $(function() {
    $('#myupdateModal').modal('hide');
    $('#myupdateModal').on('hide.bs.modal', function() {
      console.log('关闭模态框2');
    });
    $("#updateBtn").click(function(){
    //  console.log($("#shopId").val()+$("#shopName").val()+$("#shopPrice").val()+$("#shopSrc").val());
    var updateId = $("#upId").val();
    var updateName = $("#upName").val();
    var updatePrice = $("#upPrice").val();
    var updateSrc = $("#upSrc").val();
      $.ajax({
        url: "http://localhost:3100/goodUpdate?name="+updateName+"&price="+updatePrice+"&img="+updateSrc+"&id="+updateId+"",
        success: function() {
          console.log("更新成功");
          $('#myupdateModal').modal('hide');
           window.location.reload();
        },
        error:function(){
          console.log("更新失败");
        }
      });
    })
  });



}]);
