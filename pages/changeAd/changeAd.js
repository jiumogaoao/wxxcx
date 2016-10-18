var app = getApp();
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
      ad:"",
      list:[],
      error:"",
      popError:true
  },
  errClose:function(){},
  logout:function(){
      dao.logout();
      wx.redirectTo({
        url: '/pages/loginOrRegest/loginOrRegest'
      })
  },
  phoneChange:function(){
      wx.navigateTo({
        url: '/pages/changePhone/changePhone'
      })
  },
  onShow:function(){
      this.setData({ad:model.user.phone,list:dao.getRouter()});
  }
})