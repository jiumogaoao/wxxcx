var app=getApp();
Page({
  data: {
    imgUrls: [
      '../../images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    name:"商品1",
    dsc:"描述描述描述描述",
    price:99,
    count:1,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  add:function(event){
    var newcount=this.data.count+1;
    this.setData({count:newcount});
  },
  sub:function(event){
    if(this.data.count<1){
      return false;
    }
    var newcount=this.data.count-1;
    this.setData({count:newcount});
  },
  goCart:function(event){
    wx.navigateTo({
        url: '/pages/shoppingCart/shoppingCart'
    })
  },
  onLoad: function () {
      console.log(app.globalData.productId)
  }
})
