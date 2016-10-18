var app = getApp();
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
      fedBack:"",
      error:"",
      popError:true
  },
  errClose:function(){},
  textchange:function(event){
     this.setData({fedBack:event.detail.value});
  },
  send:function(){
      if(!this.data.fedBack){
          this.setData({error:"请输入反馈内容",popError:false})
          return false;
      }
      var that=this;
      function sc(){
          wx.navigateBack();
      }
      function err(data){
          that.setData({error:data,popError:false})
      };
      dao.fedBack(this.data.fedBack,sc,err);
  }
})
