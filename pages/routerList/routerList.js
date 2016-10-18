var app = getApp()
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
    list:[],
      error:"",
      popError:true
    },
    errClose:function(){},
  toRemotely:function(event){
      model.SN=event.currentTarget.dataset.sn;
      wx.navigateTo({
          url: '/pages/remotely/remotely'
        })
  },
  onShow: function(options) {
      var list=dao.getRouter();
      this.setData({list:list});
  }
})