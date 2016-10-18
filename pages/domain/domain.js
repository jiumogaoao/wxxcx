var app = getApp()
var dao=require('../../bin/dao.js');
var model=require('../../bin/model.js');
Page({
  data: {
      list:[],
      pop:true,
      popTitle:"",
      popIP:"",
      popName:"",
      popID:"",
      error:"",
      popError:true
  },
  errClose:function(){},
  changeIP:function(event){
      this.setData({popIP:event.detail.value});
  },
  changeName:function(event){
      this.setData({popName:event.detail.value});
  },
  add:function(){
      if(!this.data.popIP){
          this.setData({error:"请输入IP",popError:false})
          return false;
      }
      if(!this.data.name){
          this.setData({error:"请输入域名",popError:false})
          return false;
      }
      var that=this;
      if(this.data.popID){
          var key=this.data.popID;
          function sc(){
              var list=dao.getDomain();
              that.setData({list:list});
          };
          function err(data){
              that.setData({error:data,popError:false})
          };
          dao.editDomain(key,this.data.popIP,this.data.popName,sc,err);
      }else{
          function sc(){
              var list=dao.getDomain();
              that.setData({list:list});
          };
          function err(data){
              that.setData({error:data,popError:false})
          };
          dao.addDomain(this.data.popIP,this.data.popName,sc,err);
      }
      this.setData({pop:true});
  },
  edit:function(event){
      this.setData({pop:false,
      popTitle:"修改域名",
      popIP:event.currentTarget.dataset.ip,
      popName:event.currentTarget.dataset.name,
      popID:event.currentTarget.dataset.id});
  },
  creat:function(){
      this.setData({pop:false,
      popTitle:"添加域名",
      popIP:"",
      popName:"",
      popID:""});
  },
  cancel:function(){
      this.setData({
          pop:true,
          popTitle:"",
          popIP:"",
          popName:"",
          popID:"",
          pop:true
      });
  },
  onShow:function(){
      var list=dao.getDomain();
      this.setData({list:list});
  }
})
