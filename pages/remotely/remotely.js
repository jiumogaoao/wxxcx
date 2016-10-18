var app = getApp();
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    current:0,
    interval: 5000,
    duration: 1000,
    typeArry:["开启","关闭"],
    typeIndex:0,
    SN:"WF271511206EA0556D",
    netSet:{
      stateArry:["开启","关闭"],
      state:0,
      name:"",
      key:"",
      line:0
    },
    noRub:[],
    blackList:[],
    toastHidden:true,
    toastText:"",
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
  stateChange:function(event){
    this.data.netSet.state=event.detail.value;
    this.setData({netSet:this.data.netSet});
  },
  nameChange:function(event){
    this.data.netSet.name=event.detail.value;
    this.setData({netSet:this.data.netSet});
  },
  keyChange:function(event){
    this.data.netSet.key=event.detail.value;
    this.setData({netSet:this.data.netSet});
  },
  lineChange:function(event){
    this.data.netSet.line=Number(event.currentTarget.dataset.id);
    this.setData({netSet:this.data.netSet});
  },
  netSetCannel:function(){
    wx.navigateBack();
  },
  netSetSave:function(){
    if(!this.data.netSet.name){
          this.setData({error:"请输入名称",popError:false})
          return false;
      }
    var that=this;
    function sc(){
      that.setData({toastText:"保存成功",toastHidden:false});
    }
    function err(data){
      that.setData({error:data,popError:false})
    }
    dao.netSet(this.data.netSet.state,this.data.netSet.name,this.data.netSet.key,this.data.netSet.line,sc,err);
  },
  toastChange:function(){
    this.setData({toastText:"",toastHidden:true});
  },
  toBlack:function(event){
    var that=this;
    function sc(data){
      that.setData({noRub:data.noRub,blackList:data.blackList,toastText:"拉黑成功",toastHidden:false});
    }
    function err(data){
      that.setData({error:data,popError:false})
    }
    dao.blackList(event.currentTarget.dataset.id,sc,err);
  },
  toWrite:function(event){
    var that=this;
    function sc(data){
      that.setData({noRub:data.noRub,blackList:data.blackList,toastText:"去除成功",toastHidden:false});
    };
    function err(data){
      that.setData({error:data,popError:false})
    };
    dao.outBlack(event.currentTarget.dataset.id,sc,err);
  },
  onShow: function(options) {
    var that=this;
    function sc(data){
      that.setData({SN:data.SN,netSet:data.netSet,noRub:data.noRub,blackList:data.blackList});
    };
    function err(data){
      that.setData({error:data,popError:false})
    };
    dao.getDetail(sc,err);
  }
})