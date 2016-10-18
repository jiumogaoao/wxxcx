var app = getApp();
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
    phone:"",
    code:"",
    codeLock:false,
    lockCount:"获取验证码",
    pop:true,
    popText:"",
      error:"",
      popError:true
    },
    errClose:function(){},
  phoneChange:function(event){
      this.setData({phone:event.detail.value});
  },
  codeChange:function(event){
      this.setData({code:event.detail.value});
  },
  getCode:function(event){
      if(!this.data.phone){
          this.setData({error:"请输入手机号",popError:false})
          return false;
      }
      var that=this;
      function sc(){
          var total=60;
          that.setData({codeLock:true,lockCount:total+"秒后可再次获取"});
          var lockDelay=setInterval(function(){
            total--;
          if(total){
              that.setData({lockCount:total+"秒后可再次获取"});
          }else{
              that.setData({codeLock:false,lockCount:"获取验证码"});
              clearInterval(lockDelay);
          }
      },1000);
      }
      function err(data){
          that.setData({error:data,popError:false})
      }
      dao.getCode(this.data.phone,sc,err);
  },
  changePhone:function(){
      if(!this.data.phone){
          this.setData({error:"请输入手机号",popError:false})
          return false;
      }
      if(!this.data.phone){
          this.setData({error:"输入验证码",popError:false})
          return false;
      }
      var that=this;
      function sc(){
        wx.navigateBack();
      }
      function err(data){
          that.setData({error:data,popError:false})
      }
      dao.changePhone(this.data.phone,this.data.code,sc,err)
  },
  onLoad: function(options) {
  }
})