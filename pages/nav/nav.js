//logs.js
var app=getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    point:[],
    alertStr:"323"
  },
  goType:function(event){
    app.globalData.navId=event.currentTarget.dataset.pid;
    wx.navigateTo({
        url: '/pages/shopList/shopList'
    })
  },
  onLoad: function () {
    var getPoint=[];
    for(i in app.nav){
      getPoint.push(app.nav[i]);
    }
    this.setData({point:getPoint});
  }
})
