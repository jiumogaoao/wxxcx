var app=getApp();
Page({
  data: {
    id:"",
    shop:"",
    imgUrls: [
      '/images/1.jpg',
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
    app.add(this.data.id,this.data.shop);
    this.setData({count:app.balance[app.globalData.productId]?app.balance[app.globalData.productId].count:0});
  },
  sub:function(event){
    app.sub(this.data.id);
    this.setData({count:app.balance[app.globalData.productId]?app.balance[app.globalData.productId].count:0});
  },
  goCart:function(event){
    wx.navigateTo({
        url: '/pages/shoppingCart/shoppingCart'
    })
  },
  onLoad: function () {
      console.log(app.globalData.productId)
      this.setData({
        id:app.productList[app.globalData.productId].id,
        shop:app.productList[app.globalData.productId].shop,
        imgUrls: app.productList[app.globalData.productId].imgUrls,
    name:app.productList[app.globalData.productId].name,
    dsc:app.productList[app.globalData.productId].dsc,
    price:app.productList[app.globalData.productId].price,
    count:app.balance[app.globalData.productId]?app.balance[app.globalData.productId].count:0
      })
  }
})
