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
  fedback:function(event){
      wx.navigateTo({
      url: '/pages/fedBack/fedBack'
    })
  },
  goDeail:function(event){
      wx.navigateTo({
      url: '/pages/questionDetail/questionDetail'
    })
  },
  onShow:function(){
    var list=dao.getQuestion()
    this.setData({list:list});
  }
})
