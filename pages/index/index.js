//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '/images/pomo1.jpg',
      '/images/pomo2.jpg',
      '/images/pomo3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  go:function(){
    wx.navigateTo({
        url: '/pages/nav/nav'
    })
  },
  onLoad: function () {
    
  }
})
