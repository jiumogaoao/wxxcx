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
    point:[
      {src:'/images/1.jpg',id:"1",name:"类型1"},
      {src:'/images/2.jpg',id:"2",name:"类型2"},
      {src:'/images/3.jpg',id:"3",name:"类型3"}
    ],
    alertStr:"323"
  },
  goType:function(event){
    app.globalData.typeId=event.currentTarget.dataset.pid;
    wx.navigateTo({
        url: '/pages/shopList/shopList'
    })
  },
  onLoad: function () {

  }
})
