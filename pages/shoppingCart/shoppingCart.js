var app=getApp();
function getList(){
  var list=[];
  for (i in app.balance){
    list.push(app.productList[i])
  }
  return list;
}
Page({
  data: {
    point:[],
    count:app.balance
  },
  add:function(event){
    var choose=event.currentTarget.dataset.pid;
    var shop=event.currentTarget.dataset.shop;
    app.add(choose,shop);
    this.setData({count:app.balance});
  },
  sub:function(event){
    var choose=event.currentTarget.dataset.pid;
    app.sub(choose);
    this.setData({count:app.balance});
  },
  goDetail:function(event){
    app.globalData.productId=event.currentTarget.dataset.pid;
    wx.navigateTo({
        url: '/pages/product/product'
    })
  },
  goBalance:function(){
    wx.redirectTo({
        url: '/pages/place/place'
    })
  },
  onShow: function () {
      this.setData({point:getList(),count:app.balance});
  }
})
