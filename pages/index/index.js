//index.js
//获取应用实例
var app = getApp()
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
    popSc:true,
    popBinded:true,
    SN:"",
    phone:"",
    bindedPhone:"",
      error:"",
      popError:true
  },
  errClose:function(){},
  toScaned:function(){
    model.scanSN=this.data.SN;
    this.setData({popSc:true});
    wx.navigateTo({
          url: '/pages/scaned/scaned'
        })
  },
  toRouterList:function(){
    var that=this;
    this.setData({popSc:true});
    function sc(){
        wx.navigateTo({
          url: '/pages/remotely/remotely'
        })
    }
    function err(data){
      that.setData({error:data,popError:false})
    }
    dao.addRouter(this.data.SN,sc,err) 
  },
  binded:function(){
    this.setData({popBinded:true});
  },
  goER:function(){
    /*
    wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {debugger;
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
      }
    });
    */
    this.setData({SN:"模拟123456655",popSc:false});
  },
  goRemotely:function(){
    if(model.user.id){
      if(model.routerList.length!=1){
        wx.navigateTo({
          url: '/pages/routerList/routerList'
        })
      }else{
        model.SN=model.routerList[0].SN;
        wx.navigateTo({
          url: '/pages/remotely/remotely'
        })
      }
    }else{
      wx.navigateTo({
          url: '/pages/loginOrRegest/loginOrRegest'
        })
    }
  },
  goDomain:function(){
    if(model.user.id){
    wx.navigateTo({
      url: '/pages/domain/domain'
    })
    }else{
      wx.navigateTo({
          url: '/pages/loginOrRegest/loginOrRegest'
        })
    }
  },
  goQuestion:function(){
    if(model.user.id){
    wx.navigateTo({
      url: '/pages/question/question'
    })
    }else{
      wx.navigateTo({
          url: '/pages/loginOrRegest/loginOrRegest'
        })
    }
  },
  goLogin:function(){
    if(model.user.id){
      wx.navigateTo({
        url: '/pages/changeAd/changeAd'
      })
    }else{
      wx.navigateTo({
        url: '/pages/loginOrRegest/loginOrRegest'
      })
    }
  },
  onLoad:function(){
  }
})
