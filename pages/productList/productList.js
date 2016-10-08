var app=getApp();
function productList(){
  var list=[];
  for (i in app.productList){
        if(app.productList[i].shop==app.globalData.shopId){
          list.push(app.productList[i])
        }
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
    app.add(choose,app.globalData.shopId);
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
  goCart:function(event){
    wx.navigateTo({
        url: '/pages/shoppingCart/shoppingCart'
    })
  },
  onShow: function () {
      console.log(app.globalData.shopId)
      this.setData({point:productList(),count:app.balance});
  }
})
