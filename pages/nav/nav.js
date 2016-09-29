//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    point:[
      {src:'/images/1.jpg',id:"1"},
      {src:'/images/2.jpg',id:"2"},
      {src:'/images/3.jpg',id:"3"}
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
