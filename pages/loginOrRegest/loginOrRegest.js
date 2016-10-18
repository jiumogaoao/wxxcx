var app = getApp()
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    current:0,
    interval: 5000,
    duration: 1000,
    phone:"",
    code:"",
    key:"",
    codeLock:false,
    lockCount:"获取验证码",
      error:"",
      popError:true
    },
errClose:function(){},
  swChange:function(event){
    this.setData({current:event.detail.current})
  },
  navTap:function(event){
    this.setData({current:Number(event.currentTarget.dataset.number)})
  },
  phoneChange:function(event){
      this.setData({phone:event.detail.value});
  },
  keyChange:function(event){
      this.setData({key:event.detail.value});
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
  login:function(){
      if(!this.data.phone){
          this.setData({error:"请输入手机号",popError:false})
          return false;
      }
      if(!this.data.key){
          this.setData({error:"请输入密码",popError:false})
          return false;
      }
      var that=this;
      function sc(){
          wx.redirectTo({
            url: '/pages/routerList/routerList'
        })
      }
      function err(data){
          that.setData({error:data,popError:false})
      }
      dao.login(this.data.phone,this.data.key,sc,err);
  },
  regest:function(){
      if(!this.data.phone){
          this.setData({error:"请输入手机号",popError:false})
          return false;
      }
      if(!this.data.key){
          this.setData({error:"请输入密码",popError:false})
          return false;
      }
      if(!this.data.code){
          this.setData({error:"请输入验证码",popError:false})
          return false;
      }
      var that=this;
      function sc(){
          wx.redirectTo({
                url: '/pages/routerList/routerList'
            })
      }
      function err(data){
          that.setData({error:data,popError:false})
      }
      dao.regest(this.data.phone,this.data.key,this.data.code,null,sc,err);
  },
  onLoad: function(options) {
  }
})