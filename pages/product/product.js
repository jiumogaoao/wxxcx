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
  onLoad: function () {
      console.log(app.globalData.productId)
  }
})
