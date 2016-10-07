var app=getApp();
Page({
  data: {
    point:[]
  },
  goShop:function(event){
      app.globalData.shopId=event.currentTarget.dataset.pid;
    wx.navigateTo({
        url: '/pages/productList/productList'
    })
  },
  onLoad: function () {
      console.log(app.globalData.navId)
var shopList=[];
for(i in app.shop){
  if(app.shop[i].nav==app.globalData.navId){
    shopList.push(app.shop[i]);
  }
}
this.setData({point:shopList});
  }
})
